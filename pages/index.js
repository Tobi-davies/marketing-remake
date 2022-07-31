import dynamic from "next/dynamic";
// import Hero from "../components/home/hero/hero";

// const [Hero] = [dynamic(() => import("@/components/home/hero/hero"))];
// const FeatureList = dynamic(() =>
//   import("../components/home/feature-list/feature-list")
// );
// const FeatureOne= dynamic(()=> import(''))

const [
  Hero,
  FeatureList,
  FeatureOne,
  FeatureTwo,
  FeatureThree,
  Testimonial,
  Cta,
] = [
  dynamic(() => import("../components/home/hero/hero")),
  dynamic(() => import("../components/home/feature-list/feature-list")),
  dynamic(() => import("../components/home/feature-one/feature-one")),
  dynamic(() => import("../components/home/feature-two/feature-two")),
  dynamic(() => import("../components/home/feature-three/feature-three")),
  dynamic(() => import("../components/home/testimonial/testimonial")),
  dynamic(() => import("../components/home/cta/cta")),
];

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureList />
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
      <Testimonial />
      <Cta />
    </div>
  );
}
