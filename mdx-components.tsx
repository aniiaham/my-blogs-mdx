import React, { ComponentPropsWithoutRef } from "react";
import { Link } from "next-view-transitions";
import { highlight } from "sugar-high";
import Image, { ImageProps } from "next/image";
import { CodeBlock } from "@/components/code-block";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type PreProps = ComponentPropsWithoutRef<"pre">;

const components = {
  img: (props: ImageProps) => (
    <Image
      {...props}
      className="flex flex-col justify-center items-center rounded-lg"
      alt=""
    />
  ),
  h1: (props: HeadingProps) => (
    <h1 className="font-bold text-3xl md:text-4xl mb-4 pt-8 fade-in text-foreground" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="font-bold text-xl md:text-2xl mt-10 mb-4 text-foreground" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="font-semibold text-lg mt-8 mb-3 text-foreground" {...props} />
  ),
  h4: (props: HeadingProps) => (
    <h4 className="font-medium text-foreground" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className="text-foreground/90 leading-relaxed text-[17px] mb-5" {...props} />
  ),
  h5: (props: HeadingProps) => (
    <h5 className="text-muted-foreground text-base mb-8" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className="text-foreground/90 text-[17px] list-decimal pl-6 space-y-3 mb-5" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="text-foreground/90 text-[17px] list-disc pl-6 space-y-3 mb-5" {...props} />
  ),
  li: (props: ListItemProps) => (
    <li className="pl-1 leading-relaxed text-[17px]" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="italic" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = "text-primary hover:text-primary/80 underline underline-offset-2 transition-colors";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table className="w-full my-6 text-sm">
      <thead>
        <tr className="border-b border-border">
          {data.headers.map((header, index) => (
            <th key={index} className="text-left py-2 px-3 font-semibold text-foreground">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index} className="border-b border-border">
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="py-2 px-3 text-foreground/90">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="border-l-4 border-primary/50 pl-4 my-6 text-muted-foreground italic"
      {...props}
    />
  ),
  pre: ({ children, ...props }: PreProps) => (
    <CodeBlock>
      {children}
    </CodeBlock>
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
