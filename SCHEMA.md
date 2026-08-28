\# Database Schema



\## Product Collection (MongoDB)



| Field | Type | Constraints |

|---|---|---|

| \_id | ObjectId | Primary key, auto-generated |

| name | String | Required |

| price | Number | Required, > 0 |

| description | String | Optional |

| stockQuantity | Number | Required, >= 0 |

| category | String | Optional |

| imageUrl | String | Optional, valid URL |

| createdAt | Date | Auto-generated |

| updatedAt | Date | Auto-generated |

