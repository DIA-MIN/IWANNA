import React from 'react';
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
}

const Category: React.FC<CategoryProps> = ({
  category,
  setCategory,
  setCurCategoryIdx,
}) => {
  const categoryClickHandler = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    name: string,
    idx: number
  ) => {
    setCategory(
      category.map((category) =>
        name === category.name
          ? {...category, isClicked: true}
          : {...category, isClicked: false}
      )
    );
    setCurCategoryIdx(idx);
  };

  return (
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
