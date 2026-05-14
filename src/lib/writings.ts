import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const writingsDirectory = path.join(process.cwd(), "content/writings");

export interface WritingMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

export interface Writing extends WritingMeta {
  contentHtml: string;
}

export function getSortedWritingsData(): WritingMeta[] {
  // Get file names under /content/writings
  const fileNames = fs.readdirSync(writingsDirectory);
  const allWritingsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(writingsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      slug,
      ...(matterResult.data as Omit<WritingMeta, "slug">),
    };
  });

  // Sort posts by date
  return allWritingsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getWritingData(slug: string): Promise<Writing> {
  const fullPath = path.join(writingsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    ...(matterResult.data as Omit<WritingMeta, "slug">),
  };
}
