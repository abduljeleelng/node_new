import * as request from 'supertest';
import Server from "../../server";


beforeAll(() => {
  return Server.init();
});

describe('MenuItemsController', () => {
  it('Menu Item Result Test', async () => {
    // expect("test").toBe("test");
    const response = await request(Server.getApp().app)
      .get('/menu-items/menu')
      .expect(200);

    const result = response.body;

    expect(result.length).toBe(7); //
    expect(result[0].children[0].name).toBe('Laracon');
    expect(result[0].children[0].url).toBe(
      "/events/laracon",
    );
    // Children is not nested, belong and hasMany is not nested of children
    // expect(result[0].children[0].children[1].url).toBe(
    //   '/events/laracon/workshops/eloquent',
    // );
    expect(result[0].children[1].name).toBe('Reactcon');
    expect(result[0].children[1].url).toBe(
      "/events/reactcon",
    );
    // expect(result[0].children[1].children[1].url).toBe(
    //   '/events/reactcon/workshops/jungle',
    // );
  });
});


afterAll(() => {
  return Server.close();
});
