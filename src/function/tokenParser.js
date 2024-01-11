export default function decodeJwt(token) {
  try {
    if (token) {
      const base64Payload = token.split('.')[1];
      const payloadBuffer = window.atob(base64Payload);
      return JSON.parse(payloadBuffer.toString());
    } else {
      return { exp: 0 };
    }
  } catch (err) {
    if (typeof err === 'string') {
      throw Error(err);
    }
  }
}
