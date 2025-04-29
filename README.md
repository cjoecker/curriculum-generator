# Curriculum Generator

Project to generate my own beautiful curriculums with my personal brand.

<p align="center">
  <img src="https://github.com/user-attachments/assets/68610995-436d-4ec0-8248-c067f54eee5e" alt="drawing" width="400"/>
</p>

👆In [this article](https://medium.com/@c.jocker/best-way-to-convert-a-react-page-to-pdf-489a9fda36f0) I describe the best way to generate PDFs with react

## How to use

1. Clone the repository
2. Copy `src/cv-info/languages/template.tsx` to `src/cv-info/languages/en.tsx`
3. Adapt the information in `src/cv-info/languages/en.tsx`
   The following constants should be exported:
   ```typescript
   export const PERSONAL_INFORMATION: PersonalInformation
   export const LANGUAGES: Languages
   export const HOBBIES: Hobbies
   export const EXPERIENCE: ExperienceAndEducation[]
   export const EDUCATION: ExperienceAndEducation[]
   ```
   For different positions or university degrees in the same institution,
you can add a new entry to the `positions` array
   For different activities or roles in the same position, you can add a new entry to the `descriptionBlocks` array
4. Replace [candidate-image.jpeg](public/images/candidate-image.jpeg) with an image of yourself
5. Run `npm run dev`
6. Go to [http://localhost:3000/?lang=en](http://localhost:3000/?lang=en) to see the result
7. Play with the sizes on the CV to fill the page and make it look proportional.
   For that, you can change the root font size on the `.html` class in [globals.css](src/styles/globals.css).
8. Save as pdf running `npm run export:pdf-en` to save the CV in English


ℹ️ You can have your cv in different languages adding a new file to `src/cv-info/languages/` and exporting the same constants as in `en.tsx`
