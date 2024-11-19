export interface ListItem {
  href: string;
  title: string;
  src: string | undefined;
  alt: string | undefined;
  description: string;
  keywords?: string[] | undefined;
}

export interface Props {
  list: ListItem[];
  keywords?: string[] | undefined;
}
