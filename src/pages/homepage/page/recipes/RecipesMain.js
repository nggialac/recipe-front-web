import { useState, useEffect } from "react";
import RecipeServices from "../../../../apis/RecipeServices";
import Pagination from "@material-ui/lab/Pagination";
import "./RecipesMain.css";
import Cards from "./CardRecipes";
import img from "./images/recipe-bg1.jpg";

export default function RecipesMain() {
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [searchName, setSearchName] = useState();
  const pageSizes = [5, 10, 20];

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const getRequestParams = (searchName, page, pageSize) => {
    let params = {};

    if (searchName) {
      params["name"] = searchName;
    }

    if (page) {
      params["pageNumber"] = page - 1;
    }

    if (pageSize) {
      params["pageSize"] = pageSize;
    }
    return params;
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };

  const getCourses = () => {
    const params = getRequestParams(searchName, page, pageSize);
    RecipeServices.getAllRecipe_Page(params)
      .then((response) => {
        let temp = response.data.recipes;
        setRecipes(temp);
        setCount(response.data.totalPages);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getCourses();
  }, [page, pageSize]);

  return (
    <div>
      <div
        class="p-5 text-center bg-image rounded-3 jump"
        // style={{ backgroundImage: "url(" + image + ")" }}
        style={{
          backgroundImage: "url(" + img + ")",
          objectFit: "cover",
          // backgroundSize:"cover",
          objectPosition: "center",
          backgroundRepeat: "inherit",
        }}
      ></div>
      <h1 className="pagesize-bar">Get your RECIPES!</h1>
      <div className=" justify-content-center align-items-center">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          {"Items per Page:"}
          <select onChange={handlePageSizeChange} value={pageSize}>
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-4">
          {/* {"Items per Page:"}
          <select onChange={handlePageSizeChange} value={pageSize}>
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select> */}

          {/* <Pagination
            className="my-3"
            count={count}
            page={page}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          /> */}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Recipe Name"
              value={searchName}
              onChange={onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={getCourses}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="list-recipes">
        <Cards recipes={recipes} />
      </div>
      <div className="d-flex justify-content-center">
        <div className="mt-3">
          <Pagination
            className="my-3"
            count={count}
            page={page}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
