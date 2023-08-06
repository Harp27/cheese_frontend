import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const chai = useLoaderData();
  console.log(chai);

  return (
    <div className="chai">
      <h1>{chai.name}</h1>
      <h2>{chai.description}</h2>
      <img src={chai.image} alt={chai.name} />

    <h2>Update {chai.name}</h2>
    <Form action={`/update/${chai._id}`} method="post">
        <input type="text" name="name" placeholder="Cheese name" defaultValue={chai.name}/>
        <input type="text" name="title" placeholder="Cheese description" defaultValue={chai.description}/>
        <input type="text" name="image" placeholder="Cheese image" defaultValue={chai.image}/>
        <input type="submit" value="Update Cheese"/>
    </Form>
    <h2>Delete </h2>
    <Form action={`/delete/${chai._id}`} method="post">
        <input type="submit" value="Delete Cheese"/>
    </Form>
    </div>
  );
}

export default Show;