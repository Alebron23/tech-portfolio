import Image from "next/image";
import family from "public/images/home/family.jpg";
import hvar from "public/images/home/hvar.jpeg";
import picasso from "public/images/home/picasso.jpeg";
import standing_horiz from "public/images/home/standing_horiz.jpg";
import bitcoin_source from "public/images/home/bitcoin_source.png";
import water from "public/images/home/water.jpg";
import avatar from "app/avatar.jpg";
import youtube from "public/images/home/youtube.svg";
import github from "public/images/home/github.svg";
import shopware from "public/images/home/shopware.svg";

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChannelLink({ img, link, name, type, svg }) {
  return (
    <a
      href={link}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className="flex items-center space-x-3">
        <div className="relative h-16">
          <Image
            alt={name}
            src={img}
            height={64}
            width={64}
            sizes="33vw"
            className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
          />
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-full bg-white inline-flex p-1 relative h-6 w-6 items-center -top-6 -right-10">
            <Image alt={type} src={svg} />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <em>{type}</em>
        </div>
      </div>
      <div className="text-neutral-700 dark:text-neutral-300">
        <ArrowIcon />
      </div>
    </a>
  );
}

export default async function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        Alex LeBron - Software Engineer
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>Passionate, Dedicated, Driven.</p>
      </div>

      <p className="prose prose-neutral dark:prose-invert">
        {`I am a software engineer with an entrepreneurial mindset and a passion for building great products. I currently
        work as an engineer at `}
        <span className="not-prose">
          <Badge href="https://shop-ware.com">
            <Image alt="Shop-Ware" src={shopware} />
            <span style={{ marginLeft: 4 }}>Shop-Ware</span>
          </Badge>
        </span>
        {`. My other interests include español, boxing and crypto.`}
      </p>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          My goals are to be a better thinker, solve harder problems and build
          better products. To build a great product efficiently, you have to
          hone your enginnering skills and critical thinking. One must think of
          the big picture, your customer needs, weigh the benefits of every
          action you take against meeting the desired goals of the business.
        </p>
      </div>

      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Family photo"
            src={family}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="View of Hvar, Croatia from a top a hill looking down from a fortress"
            src={hvar}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Focus mode of myself standing at my desk coding."
            src={standing_horiz}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="A real picasso painting in Madrid, Spain"
            src={picasso}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Bitcoin source code."
            src={bitcoin_source}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="Tranquil clear blue ocean water"
            src={water}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <h2>Poetry</h2>
        <p>
          "Hold fast to dreams, For if dreams die, Life is a broken-winged bird,
          That cannot fly." <br />- <em>Langston Hughes</em>
        </p>
        <p>
          "There are only two hard problems in Computer Science: cache
          invalidation and naming things." <br />- <em>Phil Karlton</em>
        </p>
        <p>
          "For hopes sake, never give up on hope, for the miracle of a new day
          is always just around the corner." <br />- <em>Unknown</em>
        </p>
      </div>
      <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
        <ChannelLink
          img={avatar}
          name="@Alebron23"
          type="Github"
          link="https://github.com/Alebron23"
          svg={github}
        />
      </div>
    </section>
  );
}
