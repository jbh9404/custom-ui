import { ReactComponent as Bookmark } from "./bookmark.svg";
import { ReactComponent as BookmarkOn } from "./bookmarkOn.svg";
import { ReactComponent as Facebook } from "./facebook.svg";
import { ReactComponent as Linkedin } from "./linkedin.svg";
import { ReactComponent as Google } from "./google.svg";
import { ReactComponent as Trash } from "./trash.svg";
import { ReactComponent as Arrow } from "./arrow.svg";

export const BookmarkIcon = (props: any) => {
  const { className, width, height, color, ...rest } = props;
  return (
    <Bookmark
      width={width}
      height={height}
      fill={color}
      className={className}
      {...rest}
    />
  );
};

export const BookmarkOnIcon = (props: any) => {
  const { className, width, height, color, ...rest } = props;
  return (
    <BookmarkOn
      width={width}
      height={height}
      fill={color}
      className={className}
      {...rest}
    />
  );
};

export const FacebookIcon = (props: any) => {
  const { className, width, height, ...rest } = props;
  return (
    <Facebook width={width} height={height} className={className} {...rest} />
  );
};

export const LinkedinIcon = (props: any) => {
  const { className, width, height, ...rest } = props;
  return (
    <Linkedin width={width} height={height} className={className} {...rest} />
  );
};

export const GoogleIcon = (props: any) => {
  const { className, width, height, ...rest } = props;
  return (
    <Google width={width} height={height} className={className} {...rest} />
  );
};

export const TrashIcon = (props: any) => {
  const { className, width, height, color, ...rest } = props;
  return (
    <Trash
      width={width}
      height={height}
      fill={color}
      className={className}
      {...rest}
    />
  );
};

export const ArrowIcon = (props: any) => {
  const { className, width, height, color, ...rest } = props;
  return (
    <Arrow
      width={width}
      height={height}
      fill={color}
      className={className}
      {...rest}
    />
  );
};
