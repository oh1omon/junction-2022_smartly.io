# Saving to Google Storage
1. Get public link to file: https://cloud.google.com/nodejs/docs/reference/storage/latest/storage/file#_google_cloud_storage_File_publicUrl_member_1_
2. How to save file to storage
3. Application Default Credentials: https://cloud.google.com/docs/authentication/provide-credentials-adc

# Kubernetes:
1. Create Deployments for Remotion, FE and BE
2. Assign services to all of them.
3. Ingress should resolve FE by *, API by /api.
4. Remotion should only have internal service

# Pipelines for FE, BE and Remotion service:
1. CI test*, produce artifacts, push them to container registry
2. CD pull artifacts from container registry and deploy them to GKE

# Terraform?
