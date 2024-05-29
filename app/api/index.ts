import { createBucketClient } from '@cosmicjs/sdk';

const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG
const READ_KEY = process.env.COSMIC_READ_KEY

const cosmic = createBucketClient({
  bucketSlug: 'kuta-mx-production',
  readKey: 'YTN3z9QH5U4vjkkiDBFTe7D0CzoKTzT0P1IEEtILP5p6tpyRYv',
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
  getMascotData
};