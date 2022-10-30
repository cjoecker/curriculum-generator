# Curriculum Generator

Project to generate my own beautiful curriculum in neumorphic style

<p align="center">
  <img src="https://user-images.githubusercontent.com/46030630/198880892-91193d3d-f98c-4bff-aa41-2730f518610d.png" alt="drawing" width="400"/>
</p>

👆In [this article](https://medium.com/@c.jocker/best-way-to-convert-a-react-page-to-pdf-489a9fda36f0) I describe the best way to generate PDFs with react

## How to use

1. Clone the repository
2. Adapt the information in [curriculum-information.tsx](src/constants/curriculum-information.tsx)
   The following constants should be exported:
   ```typescript
   export const PERSONAL_INFORMATION: PersonalInformation
   export const LANGUAGES: Languages
   export const HOBBIES: Hobbies
   export const EXPERIENCE: ExperienceAndEducation[]
   export const EDUCATION: ExperienceAndEducation[]
   ```
   For different positions or university degrees in the same institution, you can add a new entry to the `positions` array
   For different activities or roles in the same position, you can add a new entry to the `descriptionBlocks` array
3. Replace [candidate-image.jpeg](src/images/candidate-image.jpeg) with an image of yourself
4. Run `npm run start:dev`
5. Play with the sizes on the CV to fill the page and make it look proportional.
   For that, you can change the root font size on the `.html` class in [app.css](src/app.css).
   You can also adapt the column width from `min-w-[145mm]` in [app.tsx](src/app.css).
6. Save as pdf using the printing function from Chrome (File > Print… > Save as pdf).
   Remember to activate “Background graphics” in the printer configuration.

ℹ️ You can save different versions of your CV in [curriculum-information-archive](src/constants/curriculum-information-archive) folder.
For example, in different languages of for different companies. That folder is in `.gitignore`
