import React, { useState } from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, ImgContainer, Img, ReadMoreButton } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
  const [expanded, setExpanded] = useState(Array(projects.length).fill(false));

  const handleToggle = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          return (
            <BlogCard key={i}>
              <ImgContainer>
                <Img src={p.image} />
              </ImgContainer>
              <HeaderThree title={p.title}>{p.title}</HeaderThree>
              <Hr />
              <CardInfo className="card-info" expanded={expanded[i]}>{p.description}</CardInfo>
              <ReadMoreButton onClick={() => handleToggle(i)}>
                {expanded[i] ? 'Read Less' : 'Read More'}
              </ReadMoreButton>
              <div>
                <TitleContent>Tech Stack</TitleContent>
                <Hr />
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={p.visit}>Live Preview</ExternalLinks>
                <ExternalLinks href={p.source}>Source Code</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Projects;
