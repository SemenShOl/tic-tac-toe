import React from "react";
import Image from "next/image";
import cl from "./Player.module.scss";
import cn from "classnames";
export function Player({
	login,
	rating,
	avatar,
	changeRating,
}) {
	return (
		<div className={cl.wrapper}>
			<Image
				src={avatar}
				alt="avatar"
				width={48}
				height={48}
				unoptimized
			/>
			<div>
				<div className={cl.login}>
					{login}
				</div>
				<div
					className={cn(
						cl.rating,
						cl[changeRating?.color],
					)}
				>
					Рейтинг {rating}
					<span>
						{changeRating?.points}
					</span>
				</div>
			</div>
		</div>
	);
}
