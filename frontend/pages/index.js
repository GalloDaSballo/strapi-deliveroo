import {Button, Alert} from 'reactstrap'
import Layout from '../components/Layout'
import RestaurantList from '../components/RestaurantList'
export default () => {
  return(
    <Layout>
      <div>
        <Alert color="primary">
          Hello Guys
        </Alert>
        <Button color="primary">Hey Dudes</Button>
        <RestaurantList />
      </div>
    </Layout>
  )
}
