import React from "react";
import axios from "axios";
import client from "../../apollo-client";
import { gql } from "@apollo/client";
import {
  getArticle,
  getArticleBySlug,
  getArticlesBySlug,
  getArticlesPrueba,
} from "../../queries/articles";
import Layout from "../../components/layout";
import { getQuery } from "../../queries";
import getCategories from "../../queries/categories";

const Prueba = ({ articles, categories }) => {
  // console.log(articles);
  console.log(categories);
  return <Layout categories={categories.data}>Prueba2</Layout>;
};

export default Prueba;

export async function getStaticProps() {
  const articlesBySlug = await getQuery(getArticlesBySlug);
  const categories = await getQuery(getCategories);
  return {
    props: {
      articles: articlesBySlug,
      categories: categories.data.categories,
    },
    revalidate: 1,
  };
}
