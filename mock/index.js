import Mock from 'mockjs'

Mock.mock('/api/login', 'post', () => {
    const obj = {
      code: 200,
      message: '成功',
      data: {
        userId: 1,
        name: 'wl',
        role: 'admin'
      }
    };
    return obj;
  });

  export default Mock;
