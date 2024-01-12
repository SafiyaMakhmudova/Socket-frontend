import { CLIENT } from '../../constants/layouts';

export async function layoutMiddleware(route) {
  const { layout } = route?.meta;
  const layoutName = layout || CLIENT;

  console.log(layoutName);

  const component = await import(`../../layouts/${layoutName}.vue`);
  route.meta.layoutComponent = component.default;
}
