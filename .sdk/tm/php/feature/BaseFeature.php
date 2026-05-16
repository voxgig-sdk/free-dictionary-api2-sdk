<?php
declare(strict_types=1);

// FreeDictionaryApi2 SDK base feature

class FreeDictionaryApi2BaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(FreeDictionaryApi2Context $ctx, array $options): void {}
    public function PostConstruct(FreeDictionaryApi2Context $ctx): void {}
    public function PostConstructEntity(FreeDictionaryApi2Context $ctx): void {}
    public function SetData(FreeDictionaryApi2Context $ctx): void {}
    public function GetData(FreeDictionaryApi2Context $ctx): void {}
    public function GetMatch(FreeDictionaryApi2Context $ctx): void {}
    public function SetMatch(FreeDictionaryApi2Context $ctx): void {}
    public function PrePoint(FreeDictionaryApi2Context $ctx): void {}
    public function PreSpec(FreeDictionaryApi2Context $ctx): void {}
    public function PreRequest(FreeDictionaryApi2Context $ctx): void {}
    public function PreResponse(FreeDictionaryApi2Context $ctx): void {}
    public function PreResult(FreeDictionaryApi2Context $ctx): void {}
    public function PreDone(FreeDictionaryApi2Context $ctx): void {}
    public function PreUnexpected(FreeDictionaryApi2Context $ctx): void {}
}
