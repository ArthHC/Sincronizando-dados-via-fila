import Redis from 'ioredis';

async function testRedis() {
  const redis = new Redis({
    host: 'localhost',
    port: 6379,
  });

  try {
    await redis.set('test-key', 'hello');
    const value = await redis.get('test-key');
    console.log('Valor salvo no Redis:', value);
  } catch (error) {
    console.error('Erro ao conectar no Redis:', error);
  } finally {
    redis.disconnect();
  }
}

testRedis();
