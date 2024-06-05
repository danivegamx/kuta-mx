import axios from 'axios';
import { createBucketClient } from '@cosmicjs/sdk';

const postForm = async (data: any, mascot: string, sections: any) => {
  const body: { [key: string]: any } = { mascot: '', exported: false };
  const getResponses = (group: any, index: number) => {
    const datos = [];
    for (const key in group) {
      datos.push({ pregunta: group[key].question, respuesta: group[key].response });
    }
    return { nombre: sections[index].title, datos};
  };
  for (const key in data) {
    var i = Object.keys(data).indexOf(key);
    body[key] = getResponses(data[key], i);
  }
  body.mascot = mascot;
  body.exported = false;
  const response = await axios.post(process.env.AWS_LAMBDA_URL || 'https://rz8sfhlwj7.execute-api.us-west-2.amazonaws.com/default/kuta_saveForm', body);

  return response.status === 200 ? true : false;
};

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || 'kuta-mx-production',
  readKey: process.env.COSMIC_READ_KEY || 'YTN3z9QH5U4vjkkiDBFTe7D0CzoKTzT0P1IEEtILP5p6tpyRYv',
});

const getHomePageData = async () => await cosmic.objects
.find({
  type: 'homepage',
  slug: "homepage"
}).depth(2);

const getAdoptionsData = async () => await cosmic.objects
.find({
  type: 'adopciones',
  slug: "adopciones"
}).depth(2);

const getQuestionnaireData = async () => await cosmic.objects
.find({
  type: 'cuestionario',
  slug: "cuestionario"
}).depth(5);

const getMascotData = async (slug: string) => await cosmic.objects
.find({
  type: 'mascotas',
  slug
}).depth(2);

export {
  getHomePageData,
  getAdoptionsData,
  getQuestionnaireData,
  getMascotData,
  postForm
};