// Redirección permanente de rutas HTML sin barra final a su versión con barra.
// Cloudflare assets las resuelve con un 307 (temporal); Google lo lee como señal
// a favor de la versión sin barra. Todo lo demás pasa tal cual a los assets.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const esLectura = request.method === 'GET' || request.method === 'HEAD';
    const ultimoSegmento = url.pathname.split('/').pop();

    if (esLectura && ultimoSegmento !== '' && !ultimoSegmento.includes('.')) {
      const conBarra = new URL(url);
      conBarra.pathname = `${url.pathname}/`;
      const existe = await env.ASSETS.fetch(new Request(conBarra, { method: 'HEAD' }));
      if (existe.status === 200) {
        return Response.redirect(conBarra.toString(), 301);
      }
    }

    return env.ASSETS.fetch(request);
  },
};
