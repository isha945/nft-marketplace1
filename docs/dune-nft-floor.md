# Dune NFT Floor Price

Fetch NFT collection floor prices and statistics.

## Usage

```tsx
import { useNFTFloor } from '@/hooks/useNFTFloor';

function NFTStats() {
  const { data: floor } = useNFTFloor({
    collectionAddress: '0x...'
  });
  
  return <NFTFloorCard data={floor} />;
}
```
