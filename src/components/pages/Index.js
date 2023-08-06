import { Link, useLoaderData, Form } from "react-router-dom";

function Index(props) {
  // GET THE DATA FROM OUR LOADER
  const cheese = useLoaderData();

  return (
    <div>
        <h2>Create Cheese</h2>
        <Form action="/create" method="post">
            <input type="text" name="name" placeholder="cheese name"/>
            <input type="text" name="description" placeholder="cheese description"/>
            <input type="text" name="image" placeholder="cheese image"/>
            <input type="submit" value="Create Cheese"/>
        </Form>
      {cheese.map((chai, index) => {
        return (
          <div key={chai._id} className="chai">
            <Link to={`/${chai._id}`}>
              <h1>{chai.name}</h1>
            </Link>
            <img src={chai.image} alt={chai.name} />
            <h3>{chai.description}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Index;