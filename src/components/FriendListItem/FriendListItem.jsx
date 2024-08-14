import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const conteinerClsx = clsx(isOnline ? css.isOnline : css.isRetired);

  return (
    <li className={css.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={conteinerClsx}>{isOnline ? "Online" : "Offline"}</p>
    </li>
  );
}
