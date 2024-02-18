import { Col, Container, Input, Row } from "reactstrap";

export const RecipeFilterBar = ({
  setSearchCategoryId,
  setSearchMealId,
  setSearchTerm,
  categories,
  meals,
}) => {
  return (
    <Container className="filter-bar">
      <Row className="row-cols-lg-auto g-4 align-items-center">
        <Col>
          <Input
            id="search-recipe"
            type="text"
            placeholder="Search Recipes"
            name="search"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </Col>
        <Col className="ms-auto">
          <select
            id="category-search"
            onChange={(event) => {
              setSearchCategoryId(parseInt(event.target.value));
            }}
          >
            <option value="0">Filter by category...</option>
            {categories.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </Col>
        <Col>
          <select
            id="meal-search"
            onChange={(event) => {
              setSearchMealId(parseInt(event.target.value));
            }}
          >
            <option value="0">Filter by meal...</option>
            {meals.map((meal) => {
              return (
                <option value={meal.id} key={meal.id}>
                  {meal.name}
                </option>
              );
            })}
          </select>
        </Col>
      </Row>
    </Container>
  );
};
