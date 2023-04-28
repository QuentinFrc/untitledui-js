import { FC, SVGProps } from "react";

interface SVGParentProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const SVG: FC<SVGParentProps> = ({
  ref,
  size,
  height,
  width,
  fill,
  strokeWidth,
  stroke,
  className,
  children,
  viewBox,
  ...props
}) => {
  return (
    <svg
      className={className}
      width={size && width ? width : size ? size : "24"}
      height={size && height ? height : size ? size : "24"}
      viewBox={viewBox ? viewBox : "0 0 24 24"}
      fill={fill ? fill : "none"}
      stroke={stroke ? stroke : "black"}
      strokeWidth={strokeWidth ? strokeWidth : "2"}
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      {children}
    </svg>
  );
};

export default SVG;