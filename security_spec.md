# Security Spec for Faysal Real Estate

## Data Invariants
1. Properties must have a valid name, type, and location.
2. Inquiries must be logged with a timestamp.
3. Only authenticated admins can modify properties, agents, and testimonials.
4. Testimonials and Agents are publicly readable but only admin writable.

## The Dirty Dozen Payloads (Red Team Test Scenarios)
1. **The Ghost Field Attack**: Attempt to create a property with an undocumented `isVerifiedByAdmin` boolean field.
2. **Identity Spoofing**: Attempt to update a property as a non-authenticated user.
3. **Admin Privilege Escalation**: Attempt to write to `/admins/` collection (if it existed) or modify status on a property.
4. **ID Poisoning**: Attempt to create a property with a 2KB string as a document ID.
5. **PII Leak**: Attempt to list all `contactMessages` as a regular guest user.
6. **Immutable Field Tampering**: Attempt to change `createdAt` timestamp of a property.
7. **Type Mismatch**: Attempt to set `beds` as a string instead of a number.
8. **Size Overflow**: Attempt to upload a 5MB string for a property `name`.
9. **Status Short-circuit**: Update property status from 'Available' to 'Sold' directly without proper ownership.
10. **Query Scraping**: Attempt to fetch all contact messages without a secure `where` clause.
11. **Malicious Regex**: Use special characters in document IDs to bypass path parsing.
12. **The "Denial of Wallet" Junk Write**: Attempt to flood the `contactMessages` collection with 10,000 tiny documents per minute.

## Firestore Rules Test (Draft)
A test runner would verify that these payloads return `PERMISSION_DENIED`.
