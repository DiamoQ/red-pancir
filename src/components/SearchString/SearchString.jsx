import './SearchString.scss'
import Icon from "@/components/Icon";

const SearchString = () => {

  return (
      <form id="navigationSearch"  className="search navigation__search">
        <label htmlFor="navigation-search">
          Поиск
          <input
              type="text"
              name="search"
              id="navigation-search"
              className="navigation__input"
              placeholder="Поиск"
          />
        </label>
        <button type="submit" className="input__btn" aria-label="Найти" title="Найти" >
          <Icon
              className="button__icon"
              name='search'
              width={18}
              height={18}
              hasFill
              alt="Иконка кнопки поиска"
              draggable="false"
          />
        </button>
      </form>
  )
}

export default SearchString