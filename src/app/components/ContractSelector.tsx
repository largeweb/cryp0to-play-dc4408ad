xml
<project>
  <name>NFT Marketplace</name>
  <framework>next-on-pages</framework>
  <overview>
    A simplified NFT marketplace built with Next.js and deployed on Cloudflare Pages. It allows users to connect their wallets, browse NFTs, and potentially buy or sell them (mocked functionality).
  </overview>
  <components>
    <component>
      <path>src/app/components/NFTCard.tsx</path>
      <description>
        Displays a single NFT with its image, name, and price.
        - Props: `nft` (object with `image`, `name`, `price` properties)
        - Style: Tailwind CSS for basic card layout and styling.
      </description>
    </component>
    <component>
      <path>src/app/components/ContractSelector.tsx</path>
      <description>
        Allows users to select a specific NFT contract to interact with.
        - Purpose: To provide a dropdown (select) element to choose from a list of available NFT contract addresses.
        - Prop Interface:
          - `contracts`: An array of objects, where each object has `address` and `name` properties.
          - `onContractSelect`: A function that takes a contract address (string) as an argument and is called when a contract is selected.
        - State Management: None.
        - Mock Event Handling: The `onContractSelect` prop is called with the selected contract address.
        - Style: Tailwind CSS for styling the select element.
        - Animation: None.
        - Edge Compatibility: Uses client-side functionality ("use client").
      </description>
    </component>
  </components>
  <pages>
    <page>
      <path>src/app/page.tsx</path>
      <description>
        The main page displays a list of NFTs and a contract selector.
        - Data Fetching: Mock data for NFTs.
        - State Management: useState for the selected contract address.
        - Component composition: Renders NFTCard components for each NFT, and the ContractSelector component.
      </description>
    </page>
  </pages>
</project>