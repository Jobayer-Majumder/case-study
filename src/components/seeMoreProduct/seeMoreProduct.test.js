import '@testing-library/jest-dom/extend-expect';
import ApiCall from "../apiCall/ApiCall"


// afterEach(cleanup)

it('Api testing', async () => {
   const response = new ApiCall()
   const data = await response.api()
   expect(data[0].id).toEqual(1)
})
