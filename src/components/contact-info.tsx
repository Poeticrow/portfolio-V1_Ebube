import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ebubenwanze@gmail.com',
      href: 'mailto:john@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 803 080 8904',
      href: 'tel:+2348030808904',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Port Harcourt, Nigeria',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Poeticrow',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ebube-nwanze-428641259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/Ebube_nwanze?t=HWmwIP90e-_tTmqF99DK-w&s=09',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Contact Details */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-center gap-3">
              <detail.icon className="w-5 h-5 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">{detail.label}</p>
                {detail.href ? (
                  <Link
                    href={detail.href}
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    {detail.value}
                  </Link>
                ) : (
                  <p className="text-foreground">{detail.value}</p>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Social Links */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Connect with me</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <Button key={index} variant="outline" size="sm" asChild>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-4 h-4" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Availability */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm leading-relaxed">
            I&apos;m currently available for new projects and collaborations. I
            typically respond to messages within 24 hours.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
