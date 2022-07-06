import React, {useState} from 'react';
import './news.scss';
import {AiOutlineRightCircle} from 'react-icons/ai';

interface CategoryProps {
  category: {id: string; name: string; isClicked: boolean}[];
  setCategory: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        name: string;
        isClicked: boolean;
      }[]
    >
  >;
  // setCurCategory: React.Dispatch<React.SetStateAction<string>>;
  setCurCategoryIdx: React.Dispatch<React.SetStateAction<number>>;
}

const Category: React.FC<CategoryProps> = ({
  category,
  setCategory,
  // setCurCategory,
  setCurCategoryIdx,
}) => {
  const categoryClickHandler = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    name: string,
    idx: number
  ) => {
    setCategory(
      category.map((category, idx) =>
        name === category.name
          ? {...category, isClicked: true}
          : {...category, isClicked: false}
      )
    );
    // setCurCategory(name);
    setCurCategoryIdx(idx);
  };

  return (
    <ul className="news_category">
      {category.map((category, idx) => {
        return category.isClicked ? (
          <li className="category active" key={category.id}>
            {category.name} <AiOutlineRightCircle className="category_icon" />
          </li>
        ) : (
          <li
            className="category"
            key={category.id}
            onClick={(e) => categoryClickHandler(e, category.name, idx)}
          >
            {category.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
