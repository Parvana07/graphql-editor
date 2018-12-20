import { Cloud, userApi } from '../Container';

export const createProject = (instance: typeof Cloud) => async (
  name: string,
  is_public: boolean
) => {
  const sm = 'Creating project...';
  await instance.upStack(sm);
  return userApi(instance.state.token)
    .Mutation.createProject({
      name,
      public: is_public
    })({
      id: true,
      name: true,
      public: true,
      slug: true,
      endpoint: { uri: true }
    })
    .then((p) =>
      instance.setState((state) => ({
        ...state,
        cloud: {
          ...state.cloud,
          currentProject: p,
          projects: [...state.cloud.projects, p]
        }
      }))
    )
    .then(instance.setCloud)
    .then(() => instance.deStack(sm));
};