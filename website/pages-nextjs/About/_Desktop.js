import Slogan from '@ddanailov/styled/Slogan'

import {AboutMe, Roles} from '@about/Components'

// Avatars
import {
  HeidiAvatar,
  HenryAvatar,
  IvelinAvatar,
  MoAvatar,
  HristoAvatar,
  TsvetanAvatar,
  VladimirAvatar,
} from '@about/Components/Testimonials/Avatars'

import {
  HeidiLetter,
  HeidiInfo,
  HenryLetter,
  HenryInfo,
  IvelinLetter,
  IvelinInfo,
  MoLetter,
  MoInfo,
  AshtonLetter,
  AshtonInfo,
  HristoLetter,
  HristoInfo,
  TsvetanLetter,
  TsvetanInfo,
  VladimirLetter,
  VladimirInfo,
} from '@about/Components/Testimonials'

import {
  TestimonialBody,
  TestimonialBodyCenter,
  RecommendationBody,
} from '@about/StyledComponents'

const AboutPage = () => (
  <>
    <AboutMe />
    <Roles />

    <Slogan>Testimonials and Recommendations</Slogan>

    <TestimonialBody>
      <HeidiAvatar />

      <RecommendationBody>
        <HeidiLetter />

        <HeidiInfo />
      </RecommendationBody>
    </TestimonialBody>

    <TestimonialBodyCenter>
      <HenryAvatar />

      <RecommendationBody>
        <HenryLetter />
        <HenryInfo />
      </RecommendationBody>
    </TestimonialBodyCenter>

    <TestimonialBodyCenter>
      <IvelinAvatar />

      <RecommendationBody>
        <IvelinLetter />
        <IvelinInfo />
      </RecommendationBody>
    </TestimonialBodyCenter>

    <TestimonialBodyCenter>
      <MoAvatar />

      <RecommendationBody>
        <MoLetter />
        <MoInfo />
      </RecommendationBody>
    </TestimonialBodyCenter>

    <section>
      <AshtonLetter />
      <AshtonInfo />
    </section>

    <TestimonialBody>
      <HristoAvatar />
      <RecommendationBody>
        <HristoLetter />

        <HristoInfo />
      </RecommendationBody>
    </TestimonialBody>

    <TestimonialBody>
      <TsvetanAvatar />

      <RecommendationBody>
        <TsvetanLetter />
        <TsvetanInfo />
      </RecommendationBody>
    </TestimonialBody>

    <TestimonialBody>
      <VladimirAvatar />
      <RecommendationBody>
        <VladimirLetter />
        <VladimirInfo />
      </RecommendationBody>
    </TestimonialBody>
  </>
)

export default AboutPage