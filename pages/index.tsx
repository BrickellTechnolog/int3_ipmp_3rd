import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  MediaRenderer,
  useActiveListings,
  useContract,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { Marketplace } from "@thirdweb-dev/sdk";

const Home: NextPage = () => {
  const router = useRouter();

  // Connect your marketplace smart contract here (replace this address)
  const { contract: marketplace } = useContract(
    "0xCaa0466eE5C066957D246a8cE31Cc288F3978A8e", // Your marketplace contract address here
    "marketplace"
  );

  const { data: listings, isLoading: loadingListings } =
    useActiveListings(marketplace);

  return (
    <>
      {/* Content */}
      <div className={styles.container}>
        {/* Top Section */}
        <h1 className={styles.h1}>The Int3rPlanetary MarketPlace: Shop 3</h1>
        <p className={styles.explain}>
          The Int3rPlanetaryDAO Fully Decentralized NFT Shop.
        </p>

        <hr className={styles.divider} />

        <div style={{ marginTop: 32, marginBottom: 32 }}>
          <Link href="/create">
            <a className={styles.mainButton} style={{ textDecoration: "none" }}>
              Create A Listing
            </a>
          </Link>
        </div>

        <div className="main">
          {
            // If the listings are loading, show a loading message
            loadingListings ? (
              <div>Loading listings...</div>
            ) : (
              // Otherwise, show the listings
              <div className={styles.listingGrid}>
                {listings?.map((listing) => (
                  <div
                    key={listing.id}
                    className={styles.listingShortView}
                    onClick={() => router.push(`/listing/${listing.id}`)}
                  >
                    <MediaRenderer
                      src={listing.asset.image}
                      style={{
                        borderRadius: 16,
                        // Fit the image to the container
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    <h2 className={styles.nameContainer}>
                      <Link href={`/listing/${listing.id}`}>
                        <a className={styles.name}>{listing.asset.name}</a>
                      </Link>
                    </h2>

                    <p>
                      <b>{listing.buyoutCurrencyValuePerToken.displayValue}</b>{" "}
                      {listing.buyoutCurrencyValuePerToken.symbol}
                    </p>
                  </div>
                ))}
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Home;
