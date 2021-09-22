/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly author: Maybe<Author>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly social: Maybe<Social>;
  readonly menu: Maybe<SiteSiteMetadataMenu>;
  readonly footer: Maybe<SiteSiteMetadataFooter>;
  readonly member: Maybe<SiteSiteMetadataMember>;
  readonly blog: Maybe<SiteSiteMetadataBlog>;
};

type SiteSiteMetadataMenu = {
  readonly iconPath: Maybe<Scalars['String']>;
  readonly aboutUs: Maybe<Scalars['String']>;
  readonly vision: Maybe<Scalars['String']>;
  readonly service: Maybe<Scalars['String']>;
  readonly blog: Maybe<Scalars['String']>;
  readonly news: Maybe<Scalars['String']>;
  readonly member: Maybe<Scalars['String']>;
  readonly contactUs: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFooter = {
  readonly companyOverview: Maybe<Scalars['String']>;
  readonly privacyPolicy: Maybe<Scalars['String']>;
  readonly contact: Maybe<Scalars['String']>;
  readonly companyName: Maybe<Scalars['String']>;
  readonly address: Maybe<Scalars['String']>;
};

type SiteSiteMetadataMember = {
  readonly engineer: Maybe<ReadonlyArray<Maybe<SiteSiteMetadataMemberEngineer>>>;
  readonly marketing: Maybe<ReadonlyArray<Maybe<SiteSiteMetadataMemberMarketing>>>;
  readonly designer: Maybe<ReadonlyArray<Maybe<SiteSiteMetadataMemberDesigner>>>;
};

type SiteSiteMetadataMemberEngineer = {
  readonly name: Maybe<Scalars['String']>;
  readonly role: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly twitter: Maybe<Scalars['String']>;
};

type SiteSiteMetadataMemberMarketing = {
  readonly name: Maybe<Scalars['String']>;
  readonly role: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
};

type SiteSiteMetadataMemberDesigner = {
  readonly name: Maybe<Scalars['String']>;
  readonly role: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
};

type SiteSiteMetadataBlog = {
  readonly menu: Maybe<SiteSiteMetadataBlogMenu>;
};

type SiteSiteMetadataBlogMenu = {
  readonly all: Maybe<Scalars['String']>;
  readonly new: Maybe<Scalars['String']>;
  readonly popular: Maybe<Scalars['String']>;
  readonly writer: Maybe<Scalars['String']>;
  readonly category: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
};

type SitePageContext = {
  readonly slug: Maybe<Scalars['String']>;
  readonly category: Maybe<Scalars['String']>;
  readonly writer: Maybe<Scalars['String']>;
};

type MarkdownHeading = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly frontmatter: Maybe<Frontmatter>;
  readonly fields: Maybe<Fields>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly fileAbsolutePath: Maybe<Scalars['String']>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};


type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ContentfulEntry = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulReference = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
};

type ContentfulAsset = ContentfulReference & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly file: Maybe<ContentfulAssetFile>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly node_locale: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulAssetSys>;
  readonly fixed: Maybe<ContentfulFixed>;
  readonly fluid: Maybe<ContentfulFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly resize: Maybe<ContentfulResize>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulAsset_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  cornerRadius?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
};


type ContentfulAsset_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  cornerRadius?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
  sizes: Maybe<Scalars['String']>;
};


type ContentfulAsset_gatsbyImageDataArgs = {
  layout?: Maybe<ContentfulImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ContentfulImagePlaceholder>;
  formats?: Maybe<ReadonlyArray<Maybe<ContentfulImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus: Maybe<ContentfulImageCropFocus>;
  cornerRadius?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
};


type ContentfulAsset_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  cornerRadius?: Maybe<Scalars['Int']>;
};

type ContentfulAssetFile = {
  readonly url: Maybe<Scalars['String']>;
  readonly details: Maybe<ContentfulAssetFileDetails>;
  readonly fileName: Maybe<Scalars['String']>;
  readonly contentType: Maybe<Scalars['String']>;
};

type ContentfulAssetFileDetails = {
  readonly size: Maybe<Scalars['Int']>;
  readonly image: Maybe<ContentfulAssetFileDetailsImage>;
};

type ContentfulAssetFileDetailsImage = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type ContentfulAssetSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
};

type ContentfulFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
};

type ContentfulImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp';

type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'pad'
  /** Crop a part of the original image to match the specified size. */
  | 'crop'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'fill'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'thumb'
  /** Scale the image regardless of the original aspect ratio. */
  | 'scale';

type ContentfulImageCropFocus =
  | 'top'
  | 'top_left'
  | 'top_right'
  | 'bottom'
  | 'bottom_left'
  | 'bottom_right'
  | 'right'
  | 'left'
  | 'face'
  | 'faces'
  | 'center';

type ContentfulFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
};

type ContentfulImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ContentfulImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type ContentfulResize = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
};

type ContentfulLayoutCopy = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulLesson = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulCourse = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulLayoutHeroImage = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulCategory = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulLessonCodeSnippets = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulLayout = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulLessonImage = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulLayoutHighlightedCourse = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulLessonCopy = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulPost = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly content: Maybe<ContentfulPostContent>;
  readonly category: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly image: Maybe<ContentfulAsset>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulPostSys>;
  readonly date: Maybe<Scalars['Date']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulPost_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulPost_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulPost_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulPostContent = {
  readonly raw: Maybe<Scalars['String']>;
  readonly references: Maybe<ReadonlyArray<Maybe<ContentfulAsset>>>;
};

type ContentfulPostSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulPostSysContentType>;
};

type ContentfulPostSysContentType = {
  readonly sys: Maybe<ContentfulPostSysContentTypeSys>;
};

type ContentfulPostSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulNews = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly content: Maybe<ContentfulNewsContent>;
  readonly slug: Maybe<Scalars['String']>;
  readonly image: Maybe<ContentfulAsset>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulNewsSys>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulNews_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulNews_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulNewsContent = {
  readonly raw: Maybe<Scalars['String']>;
  readonly references: Maybe<ReadonlyArray<Maybe<ContentfulAssetContentfulNewsUnion>>>;
};

type ContentfulAssetContentfulNewsUnion = ContentfulAsset | ContentfulNews;

type ContentfulNewsSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulNewsSysContentType>;
};

type ContentfulNewsSysContentType = {
  readonly sys: Maybe<ContentfulNewsSysContentTypeSys>;
};

type ContentfulNewsSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type Author = {
  readonly name: Maybe<Scalars['String']>;
  readonly summary: Maybe<Scalars['String']>;
};

type Social = {
  readonly twitter: Maybe<Scalars['String']>;
};

type Frontmatter = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly date: Maybe<Scalars['Date']>;
};


type Frontmatter_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Fields = {
  readonly slug: Maybe<Scalars['String']>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginPluginOptions = {
  readonly plugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPlugins>>>;
  readonly output: Maybe<Scalars['String']>;
  readonly createLinkInHead: Maybe<Scalars['Boolean']>;
  readonly entryLimit: Maybe<Scalars['Int']>;
  readonly query: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly host: Maybe<Scalars['String']>;
  readonly sitemap: Maybe<Scalars['String']>;
  readonly policy: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPolicy>>>;
  readonly offsetY: Maybe<Scalars['Int']>;
  readonly className: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  readonly showCaptions: Maybe<Scalars['Boolean']>;
  readonly markdownCaptions: Maybe<Scalars['Boolean']>;
  readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly quality: Maybe<Scalars['Int']>;
  readonly withWebp: Maybe<Scalars['Boolean']>;
  readonly tracedSVG: Maybe<Scalars['Boolean']>;
  readonly loading: Maybe<Scalars['String']>;
  readonly decoding: Maybe<Scalars['String']>;
  readonly disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
  readonly disableBgImage: Maybe<Scalars['Boolean']>;
  readonly wrapperStyle: Maybe<Scalars['String']>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly background_color: Maybe<Scalars['String']>;
  readonly theme_color: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly crossOrigin: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly sourceMap: Maybe<Scalars['Boolean']>;
  readonly autoLabel: Maybe<Scalars['String']>;
  readonly labelFormat: Maybe<Scalars['String']>;
  readonly cssPropOptimization: Maybe<Scalars['Boolean']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly accessToken: Maybe<Scalars['String']>;
  readonly environment: Maybe<Scalars['String']>;
  readonly downloadLocal: Maybe<Scalars['Boolean']>;
  readonly forceFullSync: Maybe<Scalars['Boolean']>;
  readonly pageLimit: Maybe<Scalars['Int']>;
  readonly assetDownloadWorkers: Maybe<Scalars['Int']>;
  readonly useNameForId: Maybe<Scalars['Boolean']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPlugins = {
  readonly resolve: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPluginsPluginOptions = {
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  readonly showCaptions: Maybe<Scalars['Boolean']>;
  readonly markdownCaptions: Maybe<Scalars['Boolean']>;
  readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly quality: Maybe<Scalars['Int']>;
  readonly withWebp: Maybe<Scalars['Boolean']>;
  readonly tracedSVG: Maybe<Scalars['Boolean']>;
  readonly loading: Maybe<Scalars['String']>;
  readonly decoding: Maybe<Scalars['String']>;
  readonly disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
  readonly disableBgImage: Maybe<Scalars['Boolean']>;
  readonly wrapperStyle: Maybe<Scalars['String']>;
  readonly offsetY: Maybe<Scalars['Int']>;
  readonly className: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPolicy = {
  readonly userAgent: Maybe<Scalars['String']>;
  readonly allow: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulContentType = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly displayField: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulContentTypeSys>;
};

type ContentfulContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly contentfulEntry: Maybe<ContentfulEntry>;
  readonly allContentfulEntry: ContentfulEntryConnection;
  readonly contentfulAsset: Maybe<ContentfulAsset>;
  readonly allContentfulAsset: ContentfulAssetConnection;
  readonly contentfulLayoutCopy: Maybe<ContentfulLayoutCopy>;
  readonly allContentfulLayoutCopy: ContentfulLayoutCopyConnection;
  readonly contentfulLesson: Maybe<ContentfulLesson>;
  readonly allContentfulLesson: ContentfulLessonConnection;
  readonly contentfulCourse: Maybe<ContentfulCourse>;
  readonly allContentfulCourse: ContentfulCourseConnection;
  readonly contentfulLayoutHeroImage: Maybe<ContentfulLayoutHeroImage>;
  readonly allContentfulLayoutHeroImage: ContentfulLayoutHeroImageConnection;
  readonly contentfulCategory: Maybe<ContentfulCategory>;
  readonly allContentfulCategory: ContentfulCategoryConnection;
  readonly contentfulLessonCodeSnippets: Maybe<ContentfulLessonCodeSnippets>;
  readonly allContentfulLessonCodeSnippets: ContentfulLessonCodeSnippetsConnection;
  readonly contentfulLayout: Maybe<ContentfulLayout>;
  readonly allContentfulLayout: ContentfulLayoutConnection;
  readonly contentfulLessonImage: Maybe<ContentfulLessonImage>;
  readonly allContentfulLessonImage: ContentfulLessonImageConnection;
  readonly contentfulLayoutHighlightedCourse: Maybe<ContentfulLayoutHighlightedCourse>;
  readonly allContentfulLayoutHighlightedCourse: ContentfulLayoutHighlightedCourseConnection;
  readonly contentfulLessonCopy: Maybe<ContentfulLessonCopy>;
  readonly allContentfulLessonCopy: ContentfulLessonCopyConnection;
  readonly contentfulPost: Maybe<ContentfulPost>;
  readonly allContentfulPost: ContentfulPostConnection;
  readonly contentfulNews: Maybe<ContentfulNews>;
  readonly allContentfulNews: ContentfulNewsConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly contentfulContentType: Maybe<ContentfulContentType>;
  readonly allContentfulContentType: ContentfulContentTypeConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<FrontmatterFilterInput>;
  fields: Maybe<FieldsFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulEntryArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulEntryArgs = {
  filter: Maybe<ContentfulEntryFilterInput>;
  sort: Maybe<ContentfulEntrySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAssetArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  file: Maybe<ContentfulAssetFileFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulAssetSysFilterInput>;
  fixed: Maybe<ContentfulFixedFilterInput>;
  fluid: Maybe<ContentfulFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  resize: Maybe<ContentfulResizeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulAssetArgs = {
  filter: Maybe<ContentfulAssetFilterInput>;
  sort: Maybe<ContentfulAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulLayoutCopyArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulLayoutCopyArgs = {
  filter: Maybe<ContentfulLayoutCopyFilterInput>;
  sort: Maybe<ContentfulLayoutCopySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulLessonArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulLessonArgs = {
  filter: Maybe<ContentfulLessonFilterInput>;
  sort: Maybe<ContentfulLessonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulCourseArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulCourseArgs = {
  filter: Maybe<ContentfulCourseFilterInput>;
  sort: Maybe<ContentfulCourseSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulLayoutHeroImageArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulLayoutHeroImageArgs = {
  filter: Maybe<ContentfulLayoutHeroImageFilterInput>;
  sort: Maybe<ContentfulLayoutHeroImageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulCategoryArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulCategoryArgs = {
  filter: Maybe<ContentfulCategoryFilterInput>;
  sort: Maybe<ContentfulCategorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulLessonCodeSnippetsArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulLessonCodeSnippetsArgs = {
  filter: Maybe<ContentfulLessonCodeSnippetsFilterInput>;
  sort: Maybe<ContentfulLessonCodeSnippetsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulLayoutArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulLayoutArgs = {
  filter: Maybe<ContentfulLayoutFilterInput>;
  sort: Maybe<ContentfulLayoutSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulLessonImageArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulLessonImageArgs = {
  filter: Maybe<ContentfulLessonImageFilterInput>;
  sort: Maybe<ContentfulLessonImageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulLayoutHighlightedCourseArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulLayoutHighlightedCourseArgs = {
  filter: Maybe<ContentfulLayoutHighlightedCourseFilterInput>;
  sort: Maybe<ContentfulLayoutHighlightedCourseSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulLessonCopyArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulLessonCopyArgs = {
  filter: Maybe<ContentfulLessonCopyFilterInput>;
  sort: Maybe<ContentfulLessonCopySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPostArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  author: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  content: Maybe<ContentfulPostContentFilterInput>;
  category: Maybe<StringQueryOperatorInput>;
  image: Maybe<ContentfulAssetFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulPostSysFilterInput>;
  date: Maybe<DateQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulPostArgs = {
  filter: Maybe<ContentfulPostFilterInput>;
  sort: Maybe<ContentfulPostSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulNewsArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  content: Maybe<ContentfulNewsContentFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  image: Maybe<ContentfulAssetFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulNewsSysFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulNewsArgs = {
  filter: Maybe<ContentfulNewsFilterInput>;
  sort: Maybe<ContentfulNewsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulContentTypeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  displayField: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulContentTypeSysFilterInput>;
};


type Query_allContentfulContentTypeArgs = {
  filter: Maybe<ContentfulContentTypeFilterInput>;
  sort: Maybe<ContentfulContentTypeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type MarkdownRemarkFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFilterInput>;
};

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<FrontmatterFilterInput>;
  readonly fields: Maybe<FieldsFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
};

type FieldsFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

type MarkdownHeadingFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.frontmatter.description'
  | 'childrenMarkdownRemark.frontmatter.date'
  | 'childrenMarkdownRemark.fields.slug'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.fileAbsolutePath'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.frontmatter.description'
  | 'childMarkdownRemark.frontmatter.date'
  | 'childMarkdownRemark.fields.slug'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.fileAbsolutePath'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<AuthorFilterInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly social: Maybe<SocialFilterInput>;
  readonly menu: Maybe<SiteSiteMetadataMenuFilterInput>;
  readonly footer: Maybe<SiteSiteMetadataFooterFilterInput>;
  readonly member: Maybe<SiteSiteMetadataMemberFilterInput>;
  readonly blog: Maybe<SiteSiteMetadataBlogFilterInput>;
};

type AuthorFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly summary: Maybe<StringQueryOperatorInput>;
};

type SocialFilterInput = {
  readonly twitter: Maybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataMenuFilterInput = {
  readonly iconPath: Maybe<StringQueryOperatorInput>;
  readonly aboutUs: Maybe<StringQueryOperatorInput>;
  readonly vision: Maybe<StringQueryOperatorInput>;
  readonly service: Maybe<StringQueryOperatorInput>;
  readonly blog: Maybe<StringQueryOperatorInput>;
  readonly news: Maybe<StringQueryOperatorInput>;
  readonly member: Maybe<StringQueryOperatorInput>;
  readonly contactUs: Maybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataFooterFilterInput = {
  readonly companyOverview: Maybe<StringQueryOperatorInput>;
  readonly privacyPolicy: Maybe<StringQueryOperatorInput>;
  readonly contact: Maybe<StringQueryOperatorInput>;
  readonly companyName: Maybe<StringQueryOperatorInput>;
  readonly address: Maybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataMemberFilterInput = {
  readonly engineer: Maybe<SiteSiteMetadataMemberEngineerFilterListInput>;
  readonly marketing: Maybe<SiteSiteMetadataMemberMarketingFilterListInput>;
  readonly designer: Maybe<SiteSiteMetadataMemberDesignerFilterListInput>;
};

type SiteSiteMetadataMemberEngineerFilterListInput = {
  readonly elemMatch: Maybe<SiteSiteMetadataMemberEngineerFilterInput>;
};

type SiteSiteMetadataMemberEngineerFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly role: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly twitter: Maybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataMemberMarketingFilterListInput = {
  readonly elemMatch: Maybe<SiteSiteMetadataMemberMarketingFilterInput>;
};

type SiteSiteMetadataMemberMarketingFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly role: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataMemberDesignerFilterListInput = {
  readonly elemMatch: Maybe<SiteSiteMetadataMemberDesignerFilterInput>;
};

type SiteSiteMetadataMemberDesignerFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly role: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataBlogFilterInput = {
  readonly menu: Maybe<SiteSiteMetadataBlogMenuFilterInput>;
};

type SiteSiteMetadataBlogMenuFilterInput = {
  readonly all: Maybe<StringQueryOperatorInput>;
  readonly new: Maybe<StringQueryOperatorInput>;
  readonly popular: Maybe<StringQueryOperatorInput>;
  readonly writer: Maybe<StringQueryOperatorInput>;
  readonly category: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.author.name'
  | 'siteMetadata.author.summary'
  | 'siteMetadata.siteUrl'
  | 'siteMetadata.social.twitter'
  | 'siteMetadata.menu.iconPath'
  | 'siteMetadata.menu.aboutUs'
  | 'siteMetadata.menu.vision'
  | 'siteMetadata.menu.service'
  | 'siteMetadata.menu.blog'
  | 'siteMetadata.menu.news'
  | 'siteMetadata.menu.member'
  | 'siteMetadata.menu.contactUs'
  | 'siteMetadata.footer.companyOverview'
  | 'siteMetadata.footer.privacyPolicy'
  | 'siteMetadata.footer.contact'
  | 'siteMetadata.footer.companyName'
  | 'siteMetadata.footer.address'
  | 'siteMetadata.member.engineer'
  | 'siteMetadata.member.engineer.name'
  | 'siteMetadata.member.engineer.role'
  | 'siteMetadata.member.engineer.description'
  | 'siteMetadata.member.engineer.twitter'
  | 'siteMetadata.member.marketing'
  | 'siteMetadata.member.marketing.name'
  | 'siteMetadata.member.marketing.role'
  | 'siteMetadata.member.marketing.description'
  | 'siteMetadata.member.designer'
  | 'siteMetadata.member.designer.name'
  | 'siteMetadata.member.designer.role'
  | 'siteMetadata.member.designer.description'
  | 'siteMetadata.blog.menu.all'
  | 'siteMetadata.blog.menu.new'
  | 'siteMetadata.blog.menu.popular'
  | 'siteMetadata.blog.menu.writer'
  | 'siteMetadata.blog.menu.category'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePageContextFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly category: Maybe<StringQueryOperatorInput>;
  readonly writer: Maybe<StringQueryOperatorInput>;
};

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  readonly output: Maybe<StringQueryOperatorInput>;
  readonly createLinkInHead: Maybe<BooleanQueryOperatorInput>;
  readonly entryLimit: Maybe<IntQueryOperatorInput>;
  readonly query: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly sitemap: Maybe<StringQueryOperatorInput>;
  readonly policy: Maybe<SitePluginPluginOptionsPolicyFilterListInput>;
  readonly offsetY: Maybe<IntQueryOperatorInput>;
  readonly className: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly quality: Maybe<IntQueryOperatorInput>;
  readonly withWebp: Maybe<BooleanQueryOperatorInput>;
  readonly tracedSVG: Maybe<BooleanQueryOperatorInput>;
  readonly loading: Maybe<StringQueryOperatorInput>;
  readonly decoding: Maybe<StringQueryOperatorInput>;
  readonly disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
  readonly disableBgImage: Maybe<BooleanQueryOperatorInput>;
  readonly wrapperStyle: Maybe<StringQueryOperatorInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly background_color: Maybe<StringQueryOperatorInput>;
  readonly theme_color: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly sourceMap: Maybe<BooleanQueryOperatorInput>;
  readonly autoLabel: Maybe<StringQueryOperatorInput>;
  readonly labelFormat: Maybe<StringQueryOperatorInput>;
  readonly cssPropOptimization: Maybe<BooleanQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly accessToken: Maybe<StringQueryOperatorInput>;
  readonly environment: Maybe<StringQueryOperatorInput>;
  readonly downloadLocal: Maybe<BooleanQueryOperatorInput>;
  readonly forceFullSync: Maybe<BooleanQueryOperatorInput>;
  readonly pageLimit: Maybe<IntQueryOperatorInput>;
  readonly assetDownloadWorkers: Maybe<IntQueryOperatorInput>;
  readonly useNameForId: Maybe<BooleanQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

type SitePluginPluginOptionsPluginsFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly quality: Maybe<IntQueryOperatorInput>;
  readonly withWebp: Maybe<BooleanQueryOperatorInput>;
  readonly tracedSVG: Maybe<BooleanQueryOperatorInput>;
  readonly loading: Maybe<StringQueryOperatorInput>;
  readonly decoding: Maybe<StringQueryOperatorInput>;
  readonly disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
  readonly disableBgImage: Maybe<BooleanQueryOperatorInput>;
  readonly wrapperStyle: Maybe<StringQueryOperatorInput>;
  readonly offsetY: Maybe<IntQueryOperatorInput>;
  readonly className: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPolicyFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsPolicyFilterInput>;
};

type SitePluginPluginOptionsPolicyFilterInput = {
  readonly userAgent: Maybe<StringQueryOperatorInput>;
  readonly allow: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'isCreatedByStatefulCreatePages'
  | 'context.slug'
  | 'context.category'
  | 'context.writer'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.pluginOptions.plugins'
  | 'pluginCreator.pluginOptions.plugins.resolve'
  | 'pluginCreator.pluginOptions.plugins.id'
  | 'pluginCreator.pluginOptions.plugins.name'
  | 'pluginCreator.pluginOptions.plugins.version'
  | 'pluginCreator.pluginOptions.plugins.nodeAPIs'
  | 'pluginCreator.pluginOptions.plugins.browserAPIs'
  | 'pluginCreator.pluginOptions.plugins.ssrAPIs'
  | 'pluginCreator.pluginOptions.plugins.pluginFilepath'
  | 'pluginCreator.pluginOptions.output'
  | 'pluginCreator.pluginOptions.createLinkInHead'
  | 'pluginCreator.pluginOptions.entryLimit'
  | 'pluginCreator.pluginOptions.query'
  | 'pluginCreator.pluginOptions.siteUrl'
  | 'pluginCreator.pluginOptions.host'
  | 'pluginCreator.pluginOptions.sitemap'
  | 'pluginCreator.pluginOptions.policy'
  | 'pluginCreator.pluginOptions.policy.userAgent'
  | 'pluginCreator.pluginOptions.policy.allow'
  | 'pluginCreator.pluginOptions.offsetY'
  | 'pluginCreator.pluginOptions.className'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.name'
  | 'pluginCreator.pluginOptions.maxWidth'
  | 'pluginCreator.pluginOptions.linkImagesToOriginal'
  | 'pluginCreator.pluginOptions.showCaptions'
  | 'pluginCreator.pluginOptions.markdownCaptions'
  | 'pluginCreator.pluginOptions.sizeByPixelDensity'
  | 'pluginCreator.pluginOptions.backgroundColor'
  | 'pluginCreator.pluginOptions.quality'
  | 'pluginCreator.pluginOptions.withWebp'
  | 'pluginCreator.pluginOptions.tracedSVG'
  | 'pluginCreator.pluginOptions.loading'
  | 'pluginCreator.pluginOptions.decoding'
  | 'pluginCreator.pluginOptions.disableBgImageOnAlpha'
  | 'pluginCreator.pluginOptions.disableBgImage'
  | 'pluginCreator.pluginOptions.wrapperStyle'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.short_name'
  | 'pluginCreator.pluginOptions.start_url'
  | 'pluginCreator.pluginOptions.background_color'
  | 'pluginCreator.pluginOptions.theme_color'
  | 'pluginCreator.pluginOptions.display'
  | 'pluginCreator.pluginOptions.icon'
  | 'pluginCreator.pluginOptions.legacy'
  | 'pluginCreator.pluginOptions.theme_color_in_head'
  | 'pluginCreator.pluginOptions.cache_busting_mode'
  | 'pluginCreator.pluginOptions.crossOrigin'
  | 'pluginCreator.pluginOptions.include_favicon'
  | 'pluginCreator.pluginOptions.cacheDigest'
  | 'pluginCreator.pluginOptions.sourceMap'
  | 'pluginCreator.pluginOptions.autoLabel'
  | 'pluginCreator.pluginOptions.labelFormat'
  | 'pluginCreator.pluginOptions.cssPropOptimization'
  | 'pluginCreator.pluginOptions.spaceId'
  | 'pluginCreator.pluginOptions.accessToken'
  | 'pluginCreator.pluginOptions.environment'
  | 'pluginCreator.pluginOptions.downloadLocal'
  | 'pluginCreator.pluginOptions.forceFullSync'
  | 'pluginCreator.pluginOptions.pageLimit'
  | 'pluginCreator.pluginOptions.assetDownloadWorkers'
  | 'pluginCreator.pluginOptions.useNameForId'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreatorId';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter.title'
  | 'frontmatter.description'
  | 'frontmatter.date'
  | 'fields.slug'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fileAbsolutePath'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings.id'
  | 'headings.value'
  | 'headings.depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulEntryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
};


type ContentfulEntryConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_maxArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_minArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_sumArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

type ContentfulEntryEdge = {
  readonly next: Maybe<ContentfulEntry>;
  readonly node: ContentfulEntry;
  readonly previous: Maybe<ContentfulEntry>;
};

type ContentfulEntryFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulEntryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulEntryFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulEntrySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulEntryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulAssetFileFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly details: Maybe<ContentfulAssetFileDetailsFilterInput>;
  readonly fileName: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<StringQueryOperatorInput>;
};

type ContentfulAssetFileDetailsFilterInput = {
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

type ContentfulAssetFileDetailsImageFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type ContentfulAssetSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
};

type ContentfulFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
};

type ContentfulFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
};

type ContentfulResizeFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
};

type ContentfulAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
};


type ContentfulAssetConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_maxArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_minArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_sumArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

type ContentfulAssetEdge = {
  readonly next: Maybe<ContentfulAsset>;
  readonly node: ContentfulAsset;
  readonly previous: Maybe<ContentfulAsset>;
};

type ContentfulAssetFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file.url'
  | 'file.details.size'
  | 'file.details.image.width'
  | 'file.details.image.height'
  | 'file.fileName'
  | 'file.contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys.type'
  | 'sys.revision'
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'gatsbyImageData'
  | 'resize.base64'
  | 'resize.tracedSVG'
  | 'resize.src'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulAssetFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly file: Maybe<ContentfulAssetFileFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAssetSysFilterInput>;
  readonly fixed: Maybe<ContentfulFixedFilterInput>;
  readonly fluid: Maybe<ContentfulFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly resize: Maybe<ContentfulResizeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulLayoutCopyConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulLayoutCopyEdge>;
  readonly nodes: ReadonlyArray<ContentfulLayoutCopy>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulLayoutCopyGroupConnection>;
};


type ContentfulLayoutCopyConnection_distinctArgs = {
  field: ContentfulLayoutCopyFieldsEnum;
};


type ContentfulLayoutCopyConnection_maxArgs = {
  field: ContentfulLayoutCopyFieldsEnum;
};


type ContentfulLayoutCopyConnection_minArgs = {
  field: ContentfulLayoutCopyFieldsEnum;
};


type ContentfulLayoutCopyConnection_sumArgs = {
  field: ContentfulLayoutCopyFieldsEnum;
};


type ContentfulLayoutCopyConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulLayoutCopyFieldsEnum;
};

type ContentfulLayoutCopyEdge = {
  readonly next: Maybe<ContentfulLayoutCopy>;
  readonly node: ContentfulLayoutCopy;
  readonly previous: Maybe<ContentfulLayoutCopy>;
};

type ContentfulLayoutCopyFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulLayoutCopyGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulLayoutCopyEdge>;
  readonly nodes: ReadonlyArray<ContentfulLayoutCopy>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulLayoutCopyFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulLayoutCopySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulLayoutCopyFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulLessonConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulLessonEdge>;
  readonly nodes: ReadonlyArray<ContentfulLesson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulLessonGroupConnection>;
};


type ContentfulLessonConnection_distinctArgs = {
  field: ContentfulLessonFieldsEnum;
};


type ContentfulLessonConnection_maxArgs = {
  field: ContentfulLessonFieldsEnum;
};


type ContentfulLessonConnection_minArgs = {
  field: ContentfulLessonFieldsEnum;
};


type ContentfulLessonConnection_sumArgs = {
  field: ContentfulLessonFieldsEnum;
};


type ContentfulLessonConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulLessonFieldsEnum;
};

type ContentfulLessonEdge = {
  readonly next: Maybe<ContentfulLesson>;
  readonly node: ContentfulLesson;
  readonly previous: Maybe<ContentfulLesson>;
};

type ContentfulLessonFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulLessonGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulLessonEdge>;
  readonly nodes: ReadonlyArray<ContentfulLesson>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulLessonFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulLessonSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulLessonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulCourseConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulCourseEdge>;
  readonly nodes: ReadonlyArray<ContentfulCourse>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulCourseGroupConnection>;
};


type ContentfulCourseConnection_distinctArgs = {
  field: ContentfulCourseFieldsEnum;
};


type ContentfulCourseConnection_maxArgs = {
  field: ContentfulCourseFieldsEnum;
};


type ContentfulCourseConnection_minArgs = {
  field: ContentfulCourseFieldsEnum;
};


type ContentfulCourseConnection_sumArgs = {
  field: ContentfulCourseFieldsEnum;
};


type ContentfulCourseConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulCourseFieldsEnum;
};

type ContentfulCourseEdge = {
  readonly next: Maybe<ContentfulCourse>;
  readonly node: ContentfulCourse;
  readonly previous: Maybe<ContentfulCourse>;
};

type ContentfulCourseFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulCourseGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulCourseEdge>;
  readonly nodes: ReadonlyArray<ContentfulCourse>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulCourseFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulCourseSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulCourseFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulLayoutHeroImageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulLayoutHeroImageEdge>;
  readonly nodes: ReadonlyArray<ContentfulLayoutHeroImage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulLayoutHeroImageGroupConnection>;
};


type ContentfulLayoutHeroImageConnection_distinctArgs = {
  field: ContentfulLayoutHeroImageFieldsEnum;
};


type ContentfulLayoutHeroImageConnection_maxArgs = {
  field: ContentfulLayoutHeroImageFieldsEnum;
};


type ContentfulLayoutHeroImageConnection_minArgs = {
  field: ContentfulLayoutHeroImageFieldsEnum;
};


type ContentfulLayoutHeroImageConnection_sumArgs = {
  field: ContentfulLayoutHeroImageFieldsEnum;
};


type ContentfulLayoutHeroImageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulLayoutHeroImageFieldsEnum;
};

type ContentfulLayoutHeroImageEdge = {
  readonly next: Maybe<ContentfulLayoutHeroImage>;
  readonly node: ContentfulLayoutHeroImage;
  readonly previous: Maybe<ContentfulLayoutHeroImage>;
};

type ContentfulLayoutHeroImageFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulLayoutHeroImageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulLayoutHeroImageEdge>;
  readonly nodes: ReadonlyArray<ContentfulLayoutHeroImage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulLayoutHeroImageFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulLayoutHeroImageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulLayoutHeroImageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulCategoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulCategoryEdge>;
  readonly nodes: ReadonlyArray<ContentfulCategory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulCategoryGroupConnection>;
};


type ContentfulCategoryConnection_distinctArgs = {
  field: ContentfulCategoryFieldsEnum;
};


type ContentfulCategoryConnection_maxArgs = {
  field: ContentfulCategoryFieldsEnum;
};


type ContentfulCategoryConnection_minArgs = {
  field: ContentfulCategoryFieldsEnum;
};


type ContentfulCategoryConnection_sumArgs = {
  field: ContentfulCategoryFieldsEnum;
};


type ContentfulCategoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulCategoryFieldsEnum;
};

type ContentfulCategoryEdge = {
  readonly next: Maybe<ContentfulCategory>;
  readonly node: ContentfulCategory;
  readonly previous: Maybe<ContentfulCategory>;
};

type ContentfulCategoryFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulCategoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulCategoryEdge>;
  readonly nodes: ReadonlyArray<ContentfulCategory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulCategoryFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulCategorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulCategoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulLessonCodeSnippetsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulLessonCodeSnippetsEdge>;
  readonly nodes: ReadonlyArray<ContentfulLessonCodeSnippets>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulLessonCodeSnippetsGroupConnection>;
};


type ContentfulLessonCodeSnippetsConnection_distinctArgs = {
  field: ContentfulLessonCodeSnippetsFieldsEnum;
};


type ContentfulLessonCodeSnippetsConnection_maxArgs = {
  field: ContentfulLessonCodeSnippetsFieldsEnum;
};


type ContentfulLessonCodeSnippetsConnection_minArgs = {
  field: ContentfulLessonCodeSnippetsFieldsEnum;
};


type ContentfulLessonCodeSnippetsConnection_sumArgs = {
  field: ContentfulLessonCodeSnippetsFieldsEnum;
};


type ContentfulLessonCodeSnippetsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulLessonCodeSnippetsFieldsEnum;
};

type ContentfulLessonCodeSnippetsEdge = {
  readonly next: Maybe<ContentfulLessonCodeSnippets>;
  readonly node: ContentfulLessonCodeSnippets;
  readonly previous: Maybe<ContentfulLessonCodeSnippets>;
};

type ContentfulLessonCodeSnippetsFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulLessonCodeSnippetsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulLessonCodeSnippetsEdge>;
  readonly nodes: ReadonlyArray<ContentfulLessonCodeSnippets>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulLessonCodeSnippetsFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulLessonCodeSnippetsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulLessonCodeSnippetsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulLayoutConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulLayoutEdge>;
  readonly nodes: ReadonlyArray<ContentfulLayout>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulLayoutGroupConnection>;
};


type ContentfulLayoutConnection_distinctArgs = {
  field: ContentfulLayoutFieldsEnum;
};


type ContentfulLayoutConnection_maxArgs = {
  field: ContentfulLayoutFieldsEnum;
};


type ContentfulLayoutConnection_minArgs = {
  field: ContentfulLayoutFieldsEnum;
};


type ContentfulLayoutConnection_sumArgs = {
  field: ContentfulLayoutFieldsEnum;
};


type ContentfulLayoutConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulLayoutFieldsEnum;
};

type ContentfulLayoutEdge = {
  readonly next: Maybe<ContentfulLayout>;
  readonly node: ContentfulLayout;
  readonly previous: Maybe<ContentfulLayout>;
};

type ContentfulLayoutFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulLayoutGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulLayoutEdge>;
  readonly nodes: ReadonlyArray<ContentfulLayout>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulLayoutFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulLayoutSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulLayoutFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulLessonImageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulLessonImageEdge>;
  readonly nodes: ReadonlyArray<ContentfulLessonImage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulLessonImageGroupConnection>;
};


type ContentfulLessonImageConnection_distinctArgs = {
  field: ContentfulLessonImageFieldsEnum;
};


type ContentfulLessonImageConnection_maxArgs = {
  field: ContentfulLessonImageFieldsEnum;
};


type ContentfulLessonImageConnection_minArgs = {
  field: ContentfulLessonImageFieldsEnum;
};


type ContentfulLessonImageConnection_sumArgs = {
  field: ContentfulLessonImageFieldsEnum;
};


type ContentfulLessonImageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulLessonImageFieldsEnum;
};

type ContentfulLessonImageEdge = {
  readonly next: Maybe<ContentfulLessonImage>;
  readonly node: ContentfulLessonImage;
  readonly previous: Maybe<ContentfulLessonImage>;
};

type ContentfulLessonImageFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulLessonImageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulLessonImageEdge>;
  readonly nodes: ReadonlyArray<ContentfulLessonImage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulLessonImageFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulLessonImageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulLessonImageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulLayoutHighlightedCourseConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulLayoutHighlightedCourseEdge>;
  readonly nodes: ReadonlyArray<ContentfulLayoutHighlightedCourse>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulLayoutHighlightedCourseGroupConnection>;
};


type ContentfulLayoutHighlightedCourseConnection_distinctArgs = {
  field: ContentfulLayoutHighlightedCourseFieldsEnum;
};


type ContentfulLayoutHighlightedCourseConnection_maxArgs = {
  field: ContentfulLayoutHighlightedCourseFieldsEnum;
};


type ContentfulLayoutHighlightedCourseConnection_minArgs = {
  field: ContentfulLayoutHighlightedCourseFieldsEnum;
};


type ContentfulLayoutHighlightedCourseConnection_sumArgs = {
  field: ContentfulLayoutHighlightedCourseFieldsEnum;
};


type ContentfulLayoutHighlightedCourseConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulLayoutHighlightedCourseFieldsEnum;
};

type ContentfulLayoutHighlightedCourseEdge = {
  readonly next: Maybe<ContentfulLayoutHighlightedCourse>;
  readonly node: ContentfulLayoutHighlightedCourse;
  readonly previous: Maybe<ContentfulLayoutHighlightedCourse>;
};

type ContentfulLayoutHighlightedCourseFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulLayoutHighlightedCourseGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulLayoutHighlightedCourseEdge>;
  readonly nodes: ReadonlyArray<ContentfulLayoutHighlightedCourse>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulLayoutHighlightedCourseFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulLayoutHighlightedCourseSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulLayoutHighlightedCourseFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulLessonCopyConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulLessonCopyEdge>;
  readonly nodes: ReadonlyArray<ContentfulLessonCopy>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulLessonCopyGroupConnection>;
};


type ContentfulLessonCopyConnection_distinctArgs = {
  field: ContentfulLessonCopyFieldsEnum;
};


type ContentfulLessonCopyConnection_maxArgs = {
  field: ContentfulLessonCopyFieldsEnum;
};


type ContentfulLessonCopyConnection_minArgs = {
  field: ContentfulLessonCopyFieldsEnum;
};


type ContentfulLessonCopyConnection_sumArgs = {
  field: ContentfulLessonCopyFieldsEnum;
};


type ContentfulLessonCopyConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulLessonCopyFieldsEnum;
};

type ContentfulLessonCopyEdge = {
  readonly next: Maybe<ContentfulLessonCopy>;
  readonly node: ContentfulLessonCopy;
  readonly previous: Maybe<ContentfulLessonCopy>;
};

type ContentfulLessonCopyFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulLessonCopyGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulLessonCopyEdge>;
  readonly nodes: ReadonlyArray<ContentfulLessonCopy>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulLessonCopyFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulLessonCopySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulLessonCopyFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulPostContentFilterInput = {
  readonly raw: Maybe<StringQueryOperatorInput>;
  readonly references: Maybe<ContentfulAssetFilterListInput>;
};

type ContentfulAssetFilterListInput = {
  readonly elemMatch: Maybe<ContentfulAssetFilterInput>;
};

type ContentfulPostSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulPostSysContentTypeFilterInput>;
};

type ContentfulPostSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulPostSysContentTypeSysFilterInput>;
};

type ContentfulPostSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPostEdge>;
  readonly nodes: ReadonlyArray<ContentfulPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulPostGroupConnection>;
};


type ContentfulPostConnection_distinctArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostConnection_maxArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostConnection_minArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostConnection_sumArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulPostFieldsEnum;
};

type ContentfulPostEdge = {
  readonly next: Maybe<ContentfulPost>;
  readonly node: ContentfulPost;
  readonly previous: Maybe<ContentfulPost>;
};

type ContentfulPostFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'author'
  | 'slug'
  | 'content.raw'
  | 'content.references'
  | 'content.references.contentful_id'
  | 'content.references.id'
  | 'content.references.spaceId'
  | 'content.references.createdAt'
  | 'content.references.updatedAt'
  | 'content.references.file.url'
  | 'content.references.file.fileName'
  | 'content.references.file.contentType'
  | 'content.references.title'
  | 'content.references.description'
  | 'content.references.node_locale'
  | 'content.references.sys.type'
  | 'content.references.sys.revision'
  | 'content.references.fixed.base64'
  | 'content.references.fixed.tracedSVG'
  | 'content.references.fixed.aspectRatio'
  | 'content.references.fixed.width'
  | 'content.references.fixed.height'
  | 'content.references.fixed.src'
  | 'content.references.fixed.srcSet'
  | 'content.references.fixed.srcWebp'
  | 'content.references.fixed.srcSetWebp'
  | 'content.references.fluid.base64'
  | 'content.references.fluid.tracedSVG'
  | 'content.references.fluid.aspectRatio'
  | 'content.references.fluid.src'
  | 'content.references.fluid.srcSet'
  | 'content.references.fluid.srcWebp'
  | 'content.references.fluid.srcSetWebp'
  | 'content.references.fluid.sizes'
  | 'content.references.gatsbyImageData'
  | 'content.references.resize.base64'
  | 'content.references.resize.tracedSVG'
  | 'content.references.resize.src'
  | 'content.references.resize.width'
  | 'content.references.resize.height'
  | 'content.references.resize.aspectRatio'
  | 'content.references.parent.id'
  | 'content.references.parent.children'
  | 'content.references.children'
  | 'content.references.children.id'
  | 'content.references.children.children'
  | 'content.references.internal.content'
  | 'content.references.internal.contentDigest'
  | 'content.references.internal.description'
  | 'content.references.internal.fieldOwners'
  | 'content.references.internal.ignoreType'
  | 'content.references.internal.mediaType'
  | 'content.references.internal.owner'
  | 'content.references.internal.type'
  | 'category'
  | 'image.contentful_id'
  | 'image.id'
  | 'image.spaceId'
  | 'image.createdAt'
  | 'image.updatedAt'
  | 'image.file.url'
  | 'image.file.details.size'
  | 'image.file.fileName'
  | 'image.file.contentType'
  | 'image.title'
  | 'image.description'
  | 'image.node_locale'
  | 'image.sys.type'
  | 'image.sys.revision'
  | 'image.fixed.base64'
  | 'image.fixed.tracedSVG'
  | 'image.fixed.aspectRatio'
  | 'image.fixed.width'
  | 'image.fixed.height'
  | 'image.fixed.src'
  | 'image.fixed.srcSet'
  | 'image.fixed.srcWebp'
  | 'image.fixed.srcSetWebp'
  | 'image.fluid.base64'
  | 'image.fluid.tracedSVG'
  | 'image.fluid.aspectRatio'
  | 'image.fluid.src'
  | 'image.fluid.srcSet'
  | 'image.fluid.srcWebp'
  | 'image.fluid.srcSetWebp'
  | 'image.fluid.sizes'
  | 'image.gatsbyImageData'
  | 'image.resize.base64'
  | 'image.resize.tracedSVG'
  | 'image.resize.src'
  | 'image.resize.width'
  | 'image.resize.height'
  | 'image.resize.aspectRatio'
  | 'image.parent.id'
  | 'image.parent.parent.id'
  | 'image.parent.parent.children'
  | 'image.parent.children'
  | 'image.parent.children.id'
  | 'image.parent.children.children'
  | 'image.parent.internal.content'
  | 'image.parent.internal.contentDigest'
  | 'image.parent.internal.description'
  | 'image.parent.internal.fieldOwners'
  | 'image.parent.internal.ignoreType'
  | 'image.parent.internal.mediaType'
  | 'image.parent.internal.owner'
  | 'image.parent.internal.type'
  | 'image.children'
  | 'image.children.id'
  | 'image.children.parent.id'
  | 'image.children.parent.children'
  | 'image.children.children'
  | 'image.children.children.id'
  | 'image.children.children.children'
  | 'image.children.internal.content'
  | 'image.children.internal.contentDigest'
  | 'image.children.internal.description'
  | 'image.children.internal.fieldOwners'
  | 'image.children.internal.ignoreType'
  | 'image.children.internal.mediaType'
  | 'image.children.internal.owner'
  | 'image.children.internal.type'
  | 'image.internal.content'
  | 'image.internal.contentDigest'
  | 'image.internal.description'
  | 'image.internal.fieldOwners'
  | 'image.internal.ignoreType'
  | 'image.internal.mediaType'
  | 'image.internal.owner'
  | 'image.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'date'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulPostGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPostEdge>;
  readonly nodes: ReadonlyArray<ContentfulPost>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulPostFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly content: Maybe<ContentfulPostContentFilterInput>;
  readonly category: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulPostSysFilterInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulPostSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulPostFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulNewsContentFilterInput = {
  readonly raw: Maybe<StringQueryOperatorInput>;
};

type ContentfulNewsSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulNewsSysContentTypeFilterInput>;
};

type ContentfulNewsSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulNewsSysContentTypeSysFilterInput>;
};

type ContentfulNewsSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulNewsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulNewsEdge>;
  readonly nodes: ReadonlyArray<ContentfulNews>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulNewsGroupConnection>;
};


type ContentfulNewsConnection_distinctArgs = {
  field: ContentfulNewsFieldsEnum;
};


type ContentfulNewsConnection_maxArgs = {
  field: ContentfulNewsFieldsEnum;
};


type ContentfulNewsConnection_minArgs = {
  field: ContentfulNewsFieldsEnum;
};


type ContentfulNewsConnection_sumArgs = {
  field: ContentfulNewsFieldsEnum;
};


type ContentfulNewsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulNewsFieldsEnum;
};

type ContentfulNewsEdge = {
  readonly next: Maybe<ContentfulNews>;
  readonly node: ContentfulNews;
  readonly previous: Maybe<ContentfulNews>;
};

type ContentfulNewsFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'content.raw'
  | 'slug'
  | 'image.contentful_id'
  | 'image.id'
  | 'image.spaceId'
  | 'image.createdAt'
  | 'image.updatedAt'
  | 'image.file.url'
  | 'image.file.details.size'
  | 'image.file.fileName'
  | 'image.file.contentType'
  | 'image.title'
  | 'image.description'
  | 'image.node_locale'
  | 'image.sys.type'
  | 'image.sys.revision'
  | 'image.fixed.base64'
  | 'image.fixed.tracedSVG'
  | 'image.fixed.aspectRatio'
  | 'image.fixed.width'
  | 'image.fixed.height'
  | 'image.fixed.src'
  | 'image.fixed.srcSet'
  | 'image.fixed.srcWebp'
  | 'image.fixed.srcSetWebp'
  | 'image.fluid.base64'
  | 'image.fluid.tracedSVG'
  | 'image.fluid.aspectRatio'
  | 'image.fluid.src'
  | 'image.fluid.srcSet'
  | 'image.fluid.srcWebp'
  | 'image.fluid.srcSetWebp'
  | 'image.fluid.sizes'
  | 'image.gatsbyImageData'
  | 'image.resize.base64'
  | 'image.resize.tracedSVG'
  | 'image.resize.src'
  | 'image.resize.width'
  | 'image.resize.height'
  | 'image.resize.aspectRatio'
  | 'image.parent.id'
  | 'image.parent.parent.id'
  | 'image.parent.parent.children'
  | 'image.parent.children'
  | 'image.parent.children.id'
  | 'image.parent.children.children'
  | 'image.parent.internal.content'
  | 'image.parent.internal.contentDigest'
  | 'image.parent.internal.description'
  | 'image.parent.internal.fieldOwners'
  | 'image.parent.internal.ignoreType'
  | 'image.parent.internal.mediaType'
  | 'image.parent.internal.owner'
  | 'image.parent.internal.type'
  | 'image.children'
  | 'image.children.id'
  | 'image.children.parent.id'
  | 'image.children.parent.children'
  | 'image.children.children'
  | 'image.children.children.id'
  | 'image.children.children.children'
  | 'image.children.internal.content'
  | 'image.children.internal.contentDigest'
  | 'image.children.internal.description'
  | 'image.children.internal.fieldOwners'
  | 'image.children.internal.ignoreType'
  | 'image.children.internal.mediaType'
  | 'image.children.internal.owner'
  | 'image.children.internal.type'
  | 'image.internal.content'
  | 'image.internal.contentDigest'
  | 'image.internal.description'
  | 'image.internal.fieldOwners'
  | 'image.internal.ignoreType'
  | 'image.internal.mediaType'
  | 'image.internal.owner'
  | 'image.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulNewsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulNewsEdge>;
  readonly nodes: ReadonlyArray<ContentfulNews>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulNewsFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly content: Maybe<ContentfulNewsContentFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulNewsSysFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulNewsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulNewsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions.plugins'
  | 'pluginOptions.plugins.resolve'
  | 'pluginOptions.plugins.id'
  | 'pluginOptions.plugins.name'
  | 'pluginOptions.plugins.version'
  | 'pluginOptions.plugins.pluginOptions.maxWidth'
  | 'pluginOptions.plugins.pluginOptions.linkImagesToOriginal'
  | 'pluginOptions.plugins.pluginOptions.showCaptions'
  | 'pluginOptions.plugins.pluginOptions.markdownCaptions'
  | 'pluginOptions.plugins.pluginOptions.sizeByPixelDensity'
  | 'pluginOptions.plugins.pluginOptions.backgroundColor'
  | 'pluginOptions.plugins.pluginOptions.quality'
  | 'pluginOptions.plugins.pluginOptions.withWebp'
  | 'pluginOptions.plugins.pluginOptions.tracedSVG'
  | 'pluginOptions.plugins.pluginOptions.loading'
  | 'pluginOptions.plugins.pluginOptions.decoding'
  | 'pluginOptions.plugins.pluginOptions.disableBgImageOnAlpha'
  | 'pluginOptions.plugins.pluginOptions.disableBgImage'
  | 'pluginOptions.plugins.pluginOptions.wrapperStyle'
  | 'pluginOptions.plugins.pluginOptions.offsetY'
  | 'pluginOptions.plugins.pluginOptions.className'
  | 'pluginOptions.plugins.nodeAPIs'
  | 'pluginOptions.plugins.browserAPIs'
  | 'pluginOptions.plugins.ssrAPIs'
  | 'pluginOptions.plugins.pluginFilepath'
  | 'pluginOptions.output'
  | 'pluginOptions.createLinkInHead'
  | 'pluginOptions.entryLimit'
  | 'pluginOptions.query'
  | 'pluginOptions.siteUrl'
  | 'pluginOptions.host'
  | 'pluginOptions.sitemap'
  | 'pluginOptions.policy'
  | 'pluginOptions.policy.userAgent'
  | 'pluginOptions.policy.allow'
  | 'pluginOptions.offsetY'
  | 'pluginOptions.className'
  | 'pluginOptions.path'
  | 'pluginOptions.name'
  | 'pluginOptions.maxWidth'
  | 'pluginOptions.linkImagesToOriginal'
  | 'pluginOptions.showCaptions'
  | 'pluginOptions.markdownCaptions'
  | 'pluginOptions.sizeByPixelDensity'
  | 'pluginOptions.backgroundColor'
  | 'pluginOptions.quality'
  | 'pluginOptions.withWebp'
  | 'pluginOptions.tracedSVG'
  | 'pluginOptions.loading'
  | 'pluginOptions.decoding'
  | 'pluginOptions.disableBgImageOnAlpha'
  | 'pluginOptions.disableBgImage'
  | 'pluginOptions.wrapperStyle'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.short_name'
  | 'pluginOptions.start_url'
  | 'pluginOptions.background_color'
  | 'pluginOptions.theme_color'
  | 'pluginOptions.display'
  | 'pluginOptions.icon'
  | 'pluginOptions.legacy'
  | 'pluginOptions.theme_color_in_head'
  | 'pluginOptions.cache_busting_mode'
  | 'pluginOptions.crossOrigin'
  | 'pluginOptions.include_favicon'
  | 'pluginOptions.cacheDigest'
  | 'pluginOptions.sourceMap'
  | 'pluginOptions.autoLabel'
  | 'pluginOptions.labelFormat'
  | 'pluginOptions.cssPropOptimization'
  | 'pluginOptions.spaceId'
  | 'pluginOptions.accessToken'
  | 'pluginOptions.environment'
  | 'pluginOptions.downloadLocal'
  | 'pluginOptions.forceFullSync'
  | 'pluginOptions.pageLimit'
  | 'pluginOptions.assetDownloadWorkers'
  | 'pluginOptions.useNameForId'
  | 'pluginOptions.pathCheck'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'packageJson.keywords';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'buildTime';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulContentTypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
};


type ContentfulContentTypeConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_maxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_minArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_sumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

type ContentfulContentTypeEdge = {
  readonly next: Maybe<ContentfulContentType>;
  readonly node: ContentfulContentType;
  readonly previous: Maybe<ContentfulContentType>;
};

type ContentfulContentTypeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys.type';

type ContentfulContentTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulContentTypeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly displayField: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulContentTypeSysFilterInput>;
};

type ContentfulContentTypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulContentTypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ThreePopularContentsQueryVariables = Exact<{ [key: string]: never; }>;


type ThreePopularContentsQuery = { readonly allContentfulPost: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulPost, 'title' | 'category' | 'author' | 'slug' | 'updatedAt'>
        & { readonly image: Maybe<(
          Pick<ContentfulAsset, 'title'>
          & { readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
        )> }
      ) }> } };

type HeaderQueryQueryVariables = Exact<{ [key: string]: never; }>;


type HeaderQueryQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<{ readonly menu: Maybe<Pick<SiteSiteMetadataMenu, 'iconPath' | 'aboutUs' | 'vision' | 'service' | 'blog' | 'news' | 'member' | 'contactUs'>> }> }> };

type SeoQueryVariables = Exact<{ [key: string]: never; }>;


type SeoQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'siteUrl'>> }> };

type ThreeNewContentsQueryVariables = Exact<{ [key: string]: never; }>;


type ThreeNewContentsQuery = { readonly allContentfulPost: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulPost, 'title' | 'category' | 'author' | 'slug' | 'updatedAt'>
        & { readonly image: Maybe<(
          Pick<ContentfulAsset, 'title'>
          & { readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
        )> }
      ) }> } };

type MenuQueryQueryVariables = Exact<{ [key: string]: never; }>;


type MenuQueryQuery = { readonly allContentfulPost: Pick<ContentfulPostConnection, 'distinct'>, readonly site: Maybe<{ readonly siteMetadata: Maybe<{ readonly author: Maybe<Pick<Author, 'name' | 'summary'>>, readonly social: Maybe<Pick<Social, 'twitter'>>, readonly blog: Maybe<{ readonly menu: Maybe<Pick<SiteSiteMetadataBlogMenu, 'all' | 'new' | 'popular' | 'writer' | 'category'>> }> }> }> };

type BlogNewQueryVariables = Exact<{ [key: string]: never; }>;


type BlogNewQuery = { readonly allContentfulPost: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulPost, 'title' | 'category' | 'author' | 'slug' | 'updatedAt'>
        & { readonly image: Maybe<(
          Pick<ContentfulAsset, 'title'>
          & { readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
        )> }
      ) }> } };

type BlogAllQueryVariables = Exact<{ [key: string]: never; }>;


type BlogAllQuery = { readonly allContentfulPost: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulPost, 'title' | 'category' | 'author' | 'slug' | 'updatedAt'>
        & { readonly image: Maybe<(
          Pick<ContentfulAsset, 'title'>
          & { readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
        )> }
      ) }> } };

type BlogPopularQueryVariables = Exact<{ [key: string]: never; }>;


type BlogPopularQuery = { readonly allContentfulPost: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulPost, 'title' | 'category' | 'author' | 'slug' | 'updatedAt'>
        & { readonly image: Maybe<(
          Pick<ContentfulAsset, 'title'>
          & { readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
        )> }
      ) }> } };

type BlogWriterIndexQueryVariables = Exact<{ [key: string]: never; }>;


type BlogWriterIndexQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<{ readonly member: Maybe<{ readonly engineer: Maybe<ReadonlyArray<Maybe<Pick<SiteSiteMetadataMemberEngineer, 'description' | 'name' | 'role' | 'twitter'>>>> }> }> }> };

type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_1_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_2_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

type NewsIndexQueryVariables = Exact<{ [key: string]: never; }>;


type NewsIndexQuery = { readonly allContentfulNews: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulNews, 'slug' | 'title' | 'createdAt'>
        & { readonly image: Maybe<(
          Pick<ContentfulAsset, 'title'>
          & { readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
        )> }
      ) }> } };

type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_3_Query = { readonly site: Maybe<Pick<Site, 'buildTime'>> };

type ContentfulBlogPostBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type ContentfulBlogPostBySlugQuery = { readonly contentfulPost: Maybe<(
    Pick<ContentfulPost, 'title' | 'author' | 'createdAt' | 'updatedAt' | 'category' | 'slug'>
    & { readonly content: Maybe<(
      Pick<ContentfulPostContent, 'raw'>
      & { readonly references: Maybe<ReadonlyArray<Maybe<(
        { readonly __typename: 'ContentfulAsset' }
        & Pick<ContentfulAsset, 'id' | 'contentful_id' | 'title' | 'gatsbyImageData'>
        & { readonly fixed: Maybe<Pick<ContentfulFixed, 'width' | 'height' | 'src'>> }
      )>>> }
    )>, readonly image: Maybe<Pick<ContentfulAsset, 'gatsbyImageData'>> }
  )> };

type Unnamed_4_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_4_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

type Unnamed_5_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_5_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

type categorizedBlogPostQueryVariables = Exact<{
  category: Scalars['String'];
}>;


type categorizedBlogPostQuery = { readonly allContentfulPost: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulPost, 'title' | 'category' | 'author' | 'slug' | 'updatedAt'>
        & { readonly image: Maybe<(
          Pick<ContentfulAsset, 'title'>
          & { readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
        )> }
      ) }> } };

type ContentfulNewsPostBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type ContentfulNewsPostBySlugQuery = { readonly contentfulNews: Maybe<(
    Pick<ContentfulNews, 'title' | 'createdAt' | 'slug'>
    & { readonly content: Maybe<(
      Pick<ContentfulNewsContent, 'raw'>
      & { readonly references: Maybe<ReadonlyArray<Maybe<(
        { readonly __typename: 'ContentfulAsset' }
        & Pick<ContentfulAsset, 'id' | 'contentful_id' | 'title' | 'gatsbyImageData'>
        & { readonly fixed: Maybe<Pick<ContentfulFixed, 'width' | 'height' | 'src'>> }
      )>>> }
    )>, readonly image: Maybe<Pick<ContentfulAsset, 'gatsbyImageData'>> }
  )> };

type WriterBlogPostQueryVariables = Exact<{
  writer: Scalars['String'];
}>;


type WriterBlogPostQuery = { readonly allContentfulPost: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulPost, 'title' | 'category' | 'author' | 'slug' | 'updatedAt'>
        & { readonly image: Maybe<(
          Pick<ContentfulAsset, 'title'>
          & { readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
        )> }
      ) }> } };

type FooterQueryQueryVariables = Exact<{ [key: string]: never; }>;


type FooterQueryQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<{ readonly footer: Maybe<Pick<SiteSiteMetadataFooter, 'address' | 'companyName' | 'companyOverview' | 'contact' | 'privacyPolicy'>> }> }> };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_tracedSVGFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_noBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_withWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulFixed_withWebp_noBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_tracedSVGFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_noBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_withWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyContentfulFluid_withWebp_noBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type Unnamed_6_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_6_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

type TopIndexQueryVariables = Exact<{ [key: string]: never; }>;


type TopIndexQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<{ readonly member: Maybe<{ readonly designer: Maybe<ReadonlyArray<Maybe<Pick<SiteSiteMetadataMemberDesigner, 'description' | 'name' | 'role'>>>>, readonly engineer: Maybe<ReadonlyArray<Maybe<Pick<SiteSiteMetadataMemberEngineer, 'description' | 'name' | 'role' | 'twitter'>>>>, readonly marketing: Maybe<ReadonlyArray<Maybe<Pick<SiteSiteMetadataMemberMarketing, 'description' | 'name' | 'role'>>>> }> }> }>, readonly allContentfulNews: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulNews, 'title' | 'slug' | 'createdAt'>
        & { readonly image: Maybe<(
          Pick<ContentfulAsset, 'title'>
          & { readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
        )> }
      ) }> } };

}