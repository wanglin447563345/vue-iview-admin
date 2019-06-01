import Mock from 'mockjs'

Mock.mock('/api/login', 'post', () => {
    const obj = {
      code: 10000,
      message: '成功',
    };
    return obj;
  });

  export default Mock;