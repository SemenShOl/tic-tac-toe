import React from "react"
import cl from "./UIButton.module.scss"
import cn from "classnames"
import Link from "next/link"
/**
 * @param {{
 * children: any,
 * className:string,
 * outlined?:boolean,
 * lg?:boolean
 * }}  props
 */
export function UIButton({
    className,
    lg,
    outlined,
    children,
    path,
    onClick,
}) {
    const isOutlined = outlined ? "outlined" : ""
    const isLg = lg ? "lg" : ""
    return (
        <div>
            {path ? (
                <Link
                    href={path}
                    className={cn(
                        cl.btn,
                        cl[isOutlined],
                        cl[isLg],
                        className
                    )}
                >
                    {children}
                </Link>
            ) : (
                <button
                    className={cn(
                        cl.btn,
                        cl[isOutlined],
                        cl[isLg],
                        className
                    )}
                    onClick={onClick}
                >
                    {children}
                </button>
            )}
        </div>
    )
}
