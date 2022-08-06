import React, {useState} from 'react';
import './news.scss';
import {AiOutlineRightCircle} from 'react-icons/ai';

interface CategoryProps {
  category: {category: string; name: string; isClicked: boolean}[];
  setCategory: React.Dispatch<
    React.SetStateAction<
      {
        category: string;
        name: string;
        isClicked: boolean;
      }[]
    >
  >;
  setCurCategoryIdx: React.Dispatch<React.SetStateAction<number>>;
  select: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
}

const Category: React.FC<CategoryProps> = ({
  category,
  setCategory,
  setCurCategoryIdx,
  select,
  setSelect,
}) => {
  const categoryClickHandler = (name: string, idx: number) => {
    console.log(name, idx);
    setCategory(
      category.map((category) =>
        name === category.name
          ? {...category, isClicked: true}
          : {...category, isClicked: false}
      )
    );
    console.log(category);
    setSelect(name);
    setCurCategoryIdx(idx);
  };

  const categoryChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    categoryClickHandler(e.target.value, e.target.selectedIndex);
  };

  return (
    <div>
      <ul className="news_category">
        {category.map((category, idx) => {
          return category.isClicked ? (
            <li className="category active" key={category.category}>
              {category.name} <AiOutlineRightCircle className="category_icon" />
            </li>
          ) : (
            <li
              className="category"
              key={category.category}
              onClick={() => categoryClickHandler(category.name, idx)}
            >
              {category.name}
            </li>
          );
        })}
      </ul>
      <select
        className="news_category_select"
        onChange={categoryChangeHandler}
        value={select}
      >
        {category.map((category) => (
          <option key={category.category} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;
