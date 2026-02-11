# IPFS Storage

# IPFS Storage

Decentralized file storage using Pinata.

## Usage

```typescript
import { useIPFS } from '@/hooks/useIPFS';

function UploadForm() {
  const { upload, isUploading } = useIPFS();
  
  const handleUpload = async (file: File) => {
    const { cid, url } = await upload(file);
    console.log('Uploaded:', url);
  };
}
```
