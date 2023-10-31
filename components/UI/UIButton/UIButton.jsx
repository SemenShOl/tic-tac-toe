import React from 'react'
import cl from './UIButton.module.scss'
import cn from 'classnames'
/**
 * @param {{
 * children: any,
 * className:string,
 * outlined?:boolean,
 * lg?:boolean
 * }}  props
 */
export default function UIButton({ className, lg, outlined, children }) {
   const isOutlined = outlined ? 'outlined' : ''
   const isLg = lg ? 'lg' : ''
   return (
      <button className={cn(cl.btn, cl[isOutlined], cl[isLg], className)}>
         {children}
      </button>
   )
}
