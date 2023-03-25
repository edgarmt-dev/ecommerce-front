import React from "react";
import { HeadComponent } from "../../components/utils/head";
import useGetItemLocal from "../../hooks/useGetItemLocal";
import useRouterQuery from "../../hooks/useRouterQuery";
import DeatilsMod from "../../modules/products";

const ProductOffert = () => {
  const id = useRouterQuery();
  const { product, loading } = useGetItemLocal(id);
  return (
    <React.Fragment>
      <HeadComponent title={`${product?.name || "Details"} | Felcy`} />
      <DeatilsMod product={product} loading={loading} />
    </React.Fragment>
  );
};

export default ProductOffert;