import { revalidateTag, revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Revalidation API Route
 * Handles Sanity webhook requests for On-Demand ISR
 * 
 * Usage:
 * - Configure webhook in Sanity Studio: https://your-project.sanity.studio/desk/webhooks
 * - Set webhook URL to: https://yourdomain.com/api/revalidate
 * - Set secret in environment variable: SANITY_REVALIDATE_SECRET
 * - Add secret to webhook configuration
 */
export async function POST(request: NextRequest) {
  try {
    // Verify the request is from Sanity
    const secret = request.nextUrl.searchParams.get('secret');
    const expectedSecret = process.env.SANITY_REVALIDATE_SECRET;

    if (!expectedSecret) {
      console.error('SANITY_REVALIDATE_SECRET is not set in environment variables');
      return NextResponse.json(
        { message: 'Revalidation secret not configured' },
        { status: 500 }
      );
    }

    if (secret !== expectedSecret) {
      return NextResponse.json(
        { message: 'Invalid secret' },
        { status: 401 }
      );
    }

    // Parse the webhook payload
    const body = await request.json();
    const { _type, slug } = body;

    // Revalidate based on document type
    if (_type === 'page' && slug) {
      // Revalidate specific page path
      revalidatePath(`/${slug}`);
      console.log(`Revalidated path: /${slug}`);
    } else if (_type === 'pageBuilder') {
      // Revalidate all pages that use pageBuilder
      revalidateTag('pageBuilder');
      console.log('Revalidated pageBuilder tag');
    } else {
      // Revalidate all pages (fallback)
      revalidatePath('/', 'layout');
      console.log('Revalidated all pages');
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      path: slug ? `/${slug}` : 'all',
    });
  } catch (error) {
    console.error('Error revalidating:', error);
    return NextResponse.json(
      { message: 'Error revalidating', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * GET endpoint for testing revalidation
 * Usage: /api/revalidate?secret=YOUR_SECRET&path=/your-path
 */
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const path = request.nextUrl.searchParams.get('path');
  const expectedSecret = process.env.SANITY_REVALIDATE_SECRET;

  if (!expectedSecret) {
    return NextResponse.json(
      { message: 'SANITY_REVALIDATE_SECRET is not set' },
      { status: 500 }
    );
  }

  if (secret !== expectedSecret) {
    return NextResponse.json(
      { message: 'Invalid secret' },
      { status: 401 }
    );
  }

  if (path) {
    revalidatePath(path);
    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      path,
    });
  }

  return NextResponse.json({
    message: 'Revalidation endpoint. Use POST for webhooks or GET with ?secret=SECRET&path=/path',
  });
}

