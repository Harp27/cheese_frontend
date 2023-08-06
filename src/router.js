import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
  import App from "./App";
  import Index from "./components/pages/Index";
  import Show from "./components/pages/Show";
  import { cheeseLoader, chaiLoader } from "./loader";
  import { createAction, updateAction, deleteAction } from "./action";
  
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<App/>}>
          <Route path="" element={<Index/>} loader={cheeseLoader}/>
          <Route path=":id" element={<Show/>} loader={chaiLoader}/>
          <Route path="create" action={createAction}/>
          <Route path="update/:id" action={updateAction}/>
          <Route path="delete/:id" action={deleteAction}/>
      </Route>
  ))
  
  export default router;


  