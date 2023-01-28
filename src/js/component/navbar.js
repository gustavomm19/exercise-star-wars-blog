import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3 px-4">
      <a class="navbar-brand" href="/">
        <img
          src="https://www.pngplay.com/wp-content/uploads/2/Star-Wars-Logo-Transparent-Background.png"
          alt="Star Wars"
          width="40"
          height="24"
        />
      </a>
      <div className="ml-auto">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites {store.favorites.length}
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            {store.favorites.map((element) => (
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <a class="dropdown-item" href={`${element.entity}/${element.id}`}>
                  {element.name}
                </a>
                <button
                  style={{ border: 'none', outline: 'none', background: 'none' }}
                  onClick={() => {
                    actions.removeFavorite(element);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
            {store.favorites.length === 0 && (
              <li className="text-center">
                (empty)
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
