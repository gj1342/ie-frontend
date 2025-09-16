import React from "react";

type TextProps = {
	children: React.ReactNode;
	variant?: "title" | "subtitle" | "body" | "caption" | "primary" | "secondary" | "url";
	size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
	weight?: "normal" | "medium" | "semibold" | "bold";
	color?: string;
	className?: string;
	as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const variantClasses: Record<NonNullable<TextProps["variant"]>, string> = {
	title: "font-semibold",
	subtitle: "font-semibold",
	body: "",
	caption: "text-gray-500 dark:text-gray-400",
	primary: "text-gray-900 dark:text-white",
	secondary: "text-gray-700 dark:text-gray-300",
	url: "text-blue-600 dark:text-blue-400 underline font-medium",
};

export const Text = ({
	children,
	variant = "body",
	size = "base",
	weight = "normal",
	color = "",
	className = "",
	as: Component = "p",
}: TextProps) => {
	const baseStyle = variantClasses[variant];

	const sizeClasses = {
		xs: "text-xs",
		sm: "text-sm",
		base: "text-base",
		lg: "text-lg",
		xl: "text-xl",
		"2xl": "text-2xl",
		"3xl": "text-3xl",
		"4xl": "text-4xl",
		"5xl": "text-5xl",
		"6xl": "text-6xl",
	};

	const weightClasses = {
		normal: "font-normal",
		medium: "font-medium",
		semibold: "font-semibold",
		bold: "font-bold",
	};

	return (
		<Component
			className={`${baseStyle} ${sizeClasses[size]} ${weightClasses[weight]} ${color} ${className}`}>
			{children}
		</Component>
	);
};
