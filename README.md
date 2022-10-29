<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">NestJS npm package template</h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

### Installation

1. Clone the template
2. Run npm/yarn install

```bash
cd nestjs-package-starter
npm install
```

### Testing

#### 1. Setup a main folder

This main folder will contain both package and a small test-app to test the package.

```bash
mkdir nestjs-package
```

#### 2. Clone the Template

Clone the template inside the nestjs-package folder

```bash
cd nestjs-package
git clone https://github.com/sagarv1997/nestjs-package-template
```

#### 3. Install package dependencies and build

```bash
cd nestjs-package-template
npm install
npm build
```

#### 4. Scaffold a small NestJS App

Now create a small NestJS app inside the nestjs-package folder to test the package functionality.

```bash
cd ..
nest new test-app
```

#### 5. Install the package

```bash
cd test-app
npm install ../nestjs-package-template
```

#### 6. Test package functions

Use any of the functions from the package in your test-app. Don't forget to import the Module and Service in the main app module.

## Note

### @nestjs/\* not in dependencies ⚠️

While developing any package or library, there might be cases where you would require functionality from @nestjs/\* like @nestjs/common, during such cases, instead of adding the package in dependencies, add them in peerDependencies.

Add them in dependencies might lead to some unexpected behaviour in the root project.

## Reads

1. [Dynamic Module - NestJS Community](https://docs.nestjs.com/fundamentals/dynamic-modules)
2. [Dynamic Module - John Biundo](https://dev.to/nestjs/advanced-nestjs-how-to-build-completely-dynamic-nestjs-modules-1370)

## Author

**[Sagar Vaghela](https://sagarvaghela.in)**

## License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
