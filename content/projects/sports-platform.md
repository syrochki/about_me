---
title: ZakalBeg — Running Events Platform
description: Full-stack platform for running events with interactive route maps, participant accounts, blog and async backend — designed and built end-to-end from product research to VPS deployment.
stack:
  - Python
  - FastAPI
  - Vue.js
  - TypeScript
  - Vite
  - PostgreSQL
  - SQLAlchemy
  - Alembic
  - Redis
  - NATS
  - FastStream
  - MinIO
  - Docker
  - Nginx
year: "2025"
role: Full-stack Developer & Webmaster
github: https://github.com/syrochki/zakalbeg
featured: true
order: 1
published: true
highlights:
  - Designed and built frontend, backend, SEO, email, infra and deployment
  - Delivered interactive route maps per event with downloadable routes for sports watches
  - Implemented modular backend architecture (Repository / Service / API) with domain modules
  - Built registration flow with capacity limits, category validation and relational data loading
  - Set up async email workflows via NATS/FastStream and Redis-backed auth experiments
  - Deployed production stack on VPS with Docker Compose, Nginx, MinIO and DNS/email records
---

## Overview

**ZakalBeg** was a running-events platform inspired by sites like RussiaRunning, runin.by and local race portals.  
The target audience was runners and outdoor athletes looking for events, routes and community content.

I owned the project end-to-end: requirements research, architecture, frontend, backend, media storage, SEO, email delivery and production deployment. The platform was developed over ~6 months and ran in production for several months.

## Product

Core features shipped:

- Event and distance catalog for races
- Participant profiles and race registration
- Blog/content section for the platform
- **Interactive map for each event route** — a differentiator against simpler competitor sites
- Ability to **download the route** for devices like Garmin
- Media support for event imagery
- Email notifications for auth and account flows

Future roadmap included leaderboards, medals/status in profiles, payments, ads and stronger social features — but monetization was never connected because the client stopped communication.

## Architecture

The system was split into a separate **Vue + TypeScript + Vite** frontend and an asynchronous **FastAPI** backend, so the API could evolve independently.

Backend structure followed a modular, DDD-inspired layout:

- `auth`
- `users`
- `races`
- `blog`
- `map`
- email/event handlers

Each module typically had:

- `models.py`
- `schemas.py`
- `repo.py` / `repos/`
- `service.py`
- `endpoint.py`
- `exceptions.py`
- `deps.py`

This kept domain logic isolated and made registration, race data and media flows easier to reason about.

## Backend

Key technical work:

- **PostgreSQL** domain model around `User`, `Race`, `Distance`, `Registration`, `Result`, `Category`, `Post`
- **SQLAlchemy + Alembic** for ORM and migrations
- Registration logic with:
  - duplicate registration checks
  - distance capacity limits
  - category validation by gender/age relative to event date
  - eager loading of related entities
- **MinIO** module for media/object storage
- **Redis** for caching, queue-related needs and auth experimentation
- Auth started with JWT, then moved toward **FastAPI Users + Redis-backed session-style flow** as an experiment
- **NATS + FastStream** for background auth-related email events:
  - verification codes
  - registration emails
  - login notifications
  - password reset messages

The hardest parts were overall system design, database modeling, non-trivial registration business rules, and first-time production setup of Nginx, object storage, VPS and transactional email.

## Frontend

Frontend was a standalone client on **Vue.js + TypeScript + Vite**, consuming the API.

Notable UI/product areas:

- accounts and authenticated flows
- event pages with media
- embedded **route maps**
- route download UX for watches
- blog pages

## SEO & Webmaster

I also handled webmaster responsibilities:

- meta tags
- `sitemap.xml`
- `robots.txt`
- domain setup
- DNS / DMARC and related mail records
- production reverse proxy with **Nginx**

## Infrastructure

Production deployment:

- **Docker Compose** on a VPS
- API + frontend + supporting services
- **MinIO** for media
- **Nginx** as reverse proxy
- email delivery integration for auth workflows

## Results & Lessons

The product reached production and stayed online for about 3–4 months, but traction stayed low and the client disappeared without completing payment or supporting monetization rollout. As one of my early client projects, scope and delivery planning had clear mistakes.

What the project still demonstrates:

- ability to take a product from idea/competitors research to deployed production system
- full-stack ownership across UI, API, data, infra and SEO
- practical experience with async backend design, background events and real domain logic
- willingness to choose a more ambitious architecture and learn production operations under real constraints

If rebuilt today, I would narrow MVP scope earlier, connect monetization assumptions before heavy infra work, and sequence experiments like custom auth/event buses more carefully against delivery deadlines.
